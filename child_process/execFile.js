import {execFile} from 'child_process'

const child = execFile('../shell/a.sh',['test', 'test1', 'test2', 'test3', 'test4'],(err, stdout,stderr) => {
  if (err) {
    console.log('err -- ', err);
  } else {
    console.log('stderr -- ', stderr);
    console.log('stdout -- ', stdout);
  }
})