import http from 'node:http';
import { ChildProcessWithoutNullStreams, spawn } from 'node:child_process';

let connections = 0;
let proc: ChildProcessWithoutNullStreams | null = null;
let chunks = new Array<string>();

function cleanOut() {
  proc?.stdin.end();
  proc?.stdout.destroy();
  proc?.stderr.destroy();
  proc = null;
  chunks = [];
  connections = 0;
}

type RunRequestOptions = {
  command: string;
  flags?: string;
};

export function onRunRequest(
  req: http.IncomingMessage,
  res: http.ServerResponse,
  { command, flags }: RunRequestOptions
) {
  connections++;
  console.log(`New connection. Active connections: ${connections}`);
  req.socket.addListener('close', () => {
    connections--;
    console.log(`Connection closed (left: ${connections} connections)`);
    if (proc && connections <= 0) {
      console.log('Kill process');
      proc.kill('SIGHUP');
      cleanOut();
    }
    stdoutStream?.destroy();
    stderrStream?.destroy();
  });

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  });

  if (proc === null) {
    proc = flags ? spawn(command, flags.split(' ')) : spawn(command);
    console.log(`Run command: ${command} ${flags}`);
  } else {
    chunks.forEach((chunk) => res.write(chunk));
  }

  const stdoutStream = proc.stdout.on('data', (data) => {
    res.write(data.toString());
    chunks.push(data);
  });

  const stderrStream = proc.stderr.on('data', (data) => {
    res.write(data.toString());
    chunks.push(data);
  });

  const exitListener = proc.on('exit', (code) => {
    const msg =
      code === null
        ? 'child process exited'
        : `child process exited with code: ${code}`;
    console.log(msg);
    res.write(msg);
    cleanOut();
    res.end();
  });
}
