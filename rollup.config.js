import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

let basePlugins = [
	json(),	
	commonjs({
		include: 'node_modules/**'
	}),
	resolve(),
];
let baseExternal = [
	'module',
	'events',
	'rollup',
	'assert'		
];
const files = [
	{
		input: './demo1/index.js',
		output: 'dist/demo1/build.js'
	},
	{
		input: './inquirer/index.js',
		output: 'dist/inquirer/build.js'
	},
	{
		input: './readline/index.js',
		output: 'dist/readline/build.js'
	},
	{
		input: './process/index.js',
		output: 'dist/process/build.js'
	},
	{
		input: './child_process/index.js',
		output: 'dist/child_process/build.js'
	}
];
function creatConfig(files){
	let config = [];
	for(let i=0,j=files.length; i<j; i++){
		let obj = {
			input : files[i].input,
			plugins: basePlugins,
			external: baseExternal,
			output: {
				file: files[i].output,
				format: 'cjs',
				banner: '#!/usr/bin/env node'
			}
		};
		config.push( obj );
	}
	return config
}
const config = creatConfig( files );

export default config ;