#!/usr/bin/env bun
// Reset the Metals / scala-cli BSP / bloop stack for this repo and the
// trivalibs submodule, then regenerate the BSP config for both.
// Usage: bun scripts/ide-reset.ts [--dry-run|-n] [--force|-f]
//
// Refuses to reset while either workspace fails to compile: wiping the last
// good build output with a broken file leaves Metals nothing to index, and no
// reset fixes that. --force skips the check.
//
// Linux only (reads /proc). Afterwards reload the VS Code window(s).

import { existsSync, readdirSync, readFileSync, readlinkSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'

const dryRun = process.argv.includes('--dry-run') || process.argv.includes('-n')
const force = process.argv.includes('--force') || process.argv.includes('-f')

const root = resolve(import.meta.dir, '..')
const workspaces = [
	{ dir: root, ideInputs: ['.'] },
	{ dir: join(root, 'trivalibs'), ideInputs: ['src', 'test', 'project.scala'] },
]

// ---- compile check ----

if (force) {
	console.log('--force: skipping compile check')
} else {
	const failed = workspaces.filter(({ dir, ideInputs }) => {
		console.log(`compiling ${dir} …`)
		const result = Bun.spawnSync(['scala-cli', 'compile', '--test', ...ideInputs], {
			cwd: dir,
			stdout: 'inherit',
			stderr: 'inherit',
		})
		return result.exitCode !== 0
	})
	if (failed.length > 0) {
		console.error(
			`\ncompile failed in: ${failed.map((w) => w.dir).join(', ')}\n` +
				'Fix the errors above first. Metals stays blank while the build is broken, ' +
				'and resetting would discard the last good output. Use --force to reset anyway.',
		)
		process.exit(1)
	}
}
const workspaceDirs = workspaces.map((w) => w.dir)
const buildDirs = ['.metals', '.bsp', '.scala-build', '.bloop']

type Proc = { pid: number; args: string[]; cwd: string }

function listProcesses(): Proc[] {
	return readdirSync('/proc')
		.filter((d) => /^\d+$/.test(d))
		.flatMap((pid) => {
			try {
				const args = readFileSync(`/proc/${pid}/cmdline`, 'utf8').split('\0')
				const cwd = readlinkSync(`/proc/${pid}/cwd`)
				return [{ pid: Number(pid), args, cwd }]
			} catch {
				return []
			}
		})
}

const isInWorkspace = (path: string) =>
	workspaceDirs.some((d) => path === d || path.startsWith(d + '/'))

const isMetals = (p: Proc) =>
	p.args.includes('scala.meta.metals.Main') && workspaceDirs.includes(p.cwd)

const isScalaCliBsp = (p: Proc) =>
	/scala-cli/.test(p.args[0] ?? '') &&
	p.args[1] === 'bsp' &&
	p.args.some(isInWorkspace)

const isBloop = (p: Proc) => p.args.includes('bloop.BloopServer')

const alive = (pid: number) => {
	try {
		process.kill(pid, 0)
		return true
	} catch {
		return false
	}
}

async function stop(label: string, match: (p: Proc) => boolean) {
	const procs = listProcesses().filter(match)
	for (const p of procs) {
		console.log(`${dryRun ? 'would stop' : 'stopping'} ${label} (pid ${p.pid}, cwd ${p.cwd})`)
		if (!dryRun) process.kill(p.pid, 'SIGTERM')
	}
	if (dryRun) return
	const deadline = Date.now() + 5000
	while (procs.some((p) => alive(p.pid)) && Date.now() < deadline) {
		await Bun.sleep(100)
	}
	for (const p of procs) {
		if (alive(p.pid)) {
			console.log(`  force-killing pid ${p.pid}`)
			process.kill(p.pid, 'SIGKILL')
		}
	}
}

function run(cmd: string[], cwd: string) {
	console.log(`${dryRun ? 'would run' : 'running'}: ${cmd.join(' ')}  (in ${cwd})`)
	if (dryRun) return
	const result = Bun.spawnSync(cmd, { cwd, stdout: 'inherit', stderr: 'inherit' })
	if (result.exitCode !== 0) {
		console.error(`failed: ${cmd.join(' ')}`)
		process.exit(result.exitCode ?? 1)
	}
}

// ---- stop processes (Metals first, so it can't respawn the BSP server) ----

await stop('Metals', isMetals)
await stop('scala-cli BSP', isScalaCliBsp)
if (listProcesses().some(isBloop)) {
	run(['scala-cli', '--power', 'bloop', 'exit'], root)
}
await stop('bloop daemon', isBloop)

// ---- delete build / index state ----

for (const { dir } of workspaces) {
	for (const name of buildDirs) {
		const path = join(dir, name)
		if (!existsSync(path)) continue
		console.log(`${dryRun ? 'would delete' : 'deleting'} ${path}`)
		if (!dryRun) rmSync(path, { recursive: true, force: true })
	}
}

// ---- regenerate BSP config ----

for (const { dir, ideInputs } of workspaces) {
	run(['scala-cli', 'setup-ide', ...ideInputs], dir)
}

console.log(
	dryRun
		? '\ndry run, nothing changed'
		: '\ndone. In each VS Code window: "Developer: Reload Window", accept the Metals build import.',
)
