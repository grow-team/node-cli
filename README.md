# node命令行开发学习

使用方式：dist中的文件文件名对应着，node库的使用示例。有些操作需要对文件有读写权限

## node命令行开发常用库

node命令行开发：process、readline、child_process

### process

- `chdir` 变更Node.js进程的当前工作目录
```
  process.chdir('/tmp')
```
- `cwd`  返回 Node.js 进程当前工作的目录(__dirname:获得当前执行文件所在目录的完整目录名)
```
  process.cwd()
```

### readline

- `createInterface` 创建一个新的 readline.Interface 实例

```
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入> '
  }); 
```

- `question`  方法通过写入到 output 来展示 query，并等待用户提供到 input 的输入，然后调用 callback 函数并传入提供的输入作为第一个参数

```
  rl.question('你认为这篇教程怎么样？', (answer) => {
    console.log(`输入 非常好 跳出命令行`);
    rl.prompt();
  });

```

- `on` 用户按回车键出发on事件
```
  rl.on('line', (input) => {
    console.log(`接收到：${input}`);
    if( input === '非常好' ) {
      console.log('更多详细信息请参照：http://nodejs.cn/api/readline.html');
      rl.close();
    }
  });
```

### child_process

- `exec` 执行shell命令
```
  const exec = child_process.exec;
  exec('git clone git@github.com:jialj/annex.git',{cwd:'./test'}, (error, stdout, stderr) => {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
  });
```
- `execFile` 执行shell文件
```
    const child = execFile('../shell/a.sh',['test', 'test1', 'test2', 'test3', 'test4'],(err, stdout,stderr) => {
      if (err) {
        console.log('err -- ', err);
      } else {
        console.log('stderr -- ', stderr);
        console.log('stdout -- ', stdout);
      }
    })
```
- `spawn` 执行shell命令


## 开源库的封装

- [commander](https://github.com/tj/commander.js)：更快捷的命令行开发
- [inquirer](https://github.com/SBoudrias/Inquirer.js)：更方便的开发和用户的交互操作
- [minimist](https://github.com/substack/minimist)：更方便获取用户在命令行窗口输入参数
- [chalk](https://github.com/chalk/chalk)：命令行输出文字着色
- [ora](https://github.com/sindresorhus/ora)：命令行的加载中动画库

相关链接：[http://javascript.ruanyifeng.com/nodejs/child-process.html#toc2](http://javascript.ruanyifeng.com/nodejs/child-process.html#toc2),
[http://nodejs.cn/api/child_process.html](http://nodejs.cn/api/child_process.html),
[https://blog.liftsecurity.io/2014/08/19/Avoid-Command-Injection-Node.js](https://blog.liftsecurity.io/2014/08/19/Avoid-Command-Injection-Node.js)