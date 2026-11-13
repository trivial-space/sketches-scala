#!/usr/bin/env bun
// Offline thumbnail renders of pillars from one color group, via
// node-webgpu. Compiles PillarsPng.node.scala, then writes each render to
// sketches/rooms/columns/renders/ (gitignored).
//
//   bun sketches/rooms/columns/pillars-png.ts [--count 4] [--width 1200] [--height 800]

import { mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative } from 'node:path'
import { create } from 'webgpu'
import { nodePackageArgs } from '../../../scripts/build.ts'
import { encodePng } from '../../../trivalibs/examples/example_helpers/png.ts'
import type { PixelImage } from '../../../trivalibs/examples/example_helpers/pixels.d.ts'

const args = process.argv.slice(2)
const option = (name: string, fallback: number) => {
	const i = args.indexOf(name)
	return i >= 0 ? Number(args[i + 1]) : fallback
}
const count = option('--count', 4)
const width = option('--width', 1200)
const height = option('--height', 800)

const root = join(import.meta.dir, '../../..')
const sketchDir = relative(root, import.meta.dir)
const bundleDir = join(tmpdir(), 'pillars-png')
const bundle = join(bundleDir, 'main.js')
const outDir = join(import.meta.dir, 'renders')
mkdirSync(bundleDir, { recursive: true })
mkdirSync(outDir, { recursive: true })

const build = Bun.spawnSync(
	['scala-cli', ...nodePackageArgs(sketchDir, bundle)],
	{
		cwd: root,
		stdout: 'inherit',
		stderr: 'inherit',
	},
)
if (build.exitCode !== 0) process.exit(build.exitCode)

const { renderPillars } = await import(bundle)
const gpu = create([])
const stamp = new Date().toISOString().replace(/[:.]/g, '-')

for (let i = 0; i < count; i++) {
	const out: PixelImage = {
		width,
		height,
		format: 'rgba8unorm',
		data: new Uint8Array(width * height * 4),
	}
	await renderPillars(gpu, out)
	const file = join(outDir, `pillars-${stamp}-${i}.png`)
	writeFileSync(file, encodePng(width, height, out.data, 8))
	console.log(`wrote ${relative(root, file)}`)
}
