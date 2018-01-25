#!/usr/bin/env node
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var readline = _interopDefault(require('readline'));

/**
 * 创建readline.Interface实例
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> '
});
/**
 * question方法，在命令行显示第一个参数，
 * 同时用户输入完成，按回车键时，触发回调，返回用户输入的内容
 */
rl.question('你认为这篇教程怎么样？', (answer) => {
  console.log(`输入 非常好 跳出命令行`);
  rl.prompt();
});
/**
 * 每当 input 流接收到接收行结束符，通常是用户按下 <Enter> 键或 <Return> 键时触发
 */
rl.on('line', (input) => {
  console.log(`接收到：${input}`);
  if( input === '非常好' ) {
    console.log('更多详细信息请参照：http://nodejs.cn/api/readline.html');
    rl.close();
  }
});
