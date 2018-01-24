import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default [
	/* bin/thor */
	{
		input: './demo1/index.js',
		plugins: [
			string({ include: '**/*.md' }),
			json(),
			commonjs({
				include: 'node_modules/**'
			}),
			resolve(),
		],
		external: [
			'module',
			'events',
			'rollup',
			'assert'		
		],
		output: {
			file: 'dist/demo1/build.js',
			format: 'cjs',
			banner: '#!/usr/bin/env node'
		}
	}
];
