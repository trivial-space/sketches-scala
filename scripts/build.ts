// Shared sketch-compiling configuration. Both scripts/sketch.ts (single sketch,
// with watch + annotated output) and scripts/sketches.ts (all sketches) build
// through this so the scala-cli inputs/flags stay identical.
//
// Each sketch builds in isolation: only its own dir + the shared src + the
// trivalibs submodule src + project.scala contribute to its bundle — never a
// bare ".", which would pull in unrelated sources.
//
// `*.node.scala` files are offline renderers (driven by a sibling `*.ts` script
// via node-webgpu) and stay out of the browser bundle; see `nodePackageArgs`.

import { readdirSync } from 'node:fs'
import { join } from 'node:path'

const isNodeOnly = (file: string) => file.endsWith('.node.scala')

const sketchInputs = (sketchDir: string): string[] => {
	const files = readdirSync(sketchDir, { recursive: true }) as string[]
	if (!files.some(isNodeOnly)) return [sketchDir]
	return files
		.filter((f) => f.endsWith('.scala') && !isNodeOnly(f))
		.map((f) => join(sketchDir, f))
}

const packageArgs = (inputs: string[], out: string, watch = false) => [
	'--power',
	'package',
	...inputs,
	'src',
	'trivalibs/src',
	'project.scala',
	'--js',
	'-o',
	out,
	'-f',
	...(watch ? ['-w'] : []),
]

export const sketchPackageArgs = (
	sketchDir: string,
	opts: { watch?: boolean } = {},
): string[] =>
	packageArgs(sketchInputs(sketchDir), join(sketchDir, 'main.js'), opts.watch)

/** The whole sketch dir, `*.node.scala` included, bundled to `out`. */
export const nodePackageArgs = (sketchDir: string, out: string): string[] =>
	packageArgs([sketchDir], out)
