//process.stdin.resume();
import log from '../utils/log.js';

log('\r\nprocess.argv0=',process.argv0);
log('\r\nprocess.argv=',process.argv);
log('\r\nprocess.cwd()=',process.cwd());
log('\r\nprocess.execArgv=',process.execArgv);

process.stdin.on('data', function(data) {
  process.stdout.write(data);

  try {
    process.chdir('../');
    console.log(`New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }

  
  if( data === '退出'){
    process.exit();
  }
});