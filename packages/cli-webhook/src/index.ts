import http from 'node:http';
import args from 'args';
import { onRunRequest } from './run';
import { onCorsRequest } from './cors';
import { onHomeRequest } from './home';

args
  .option('port', 'The port on which the app will be running', 3000)
  .option('host', 'The host on which the app will be running', '0.0.0.0')
  .option('command', 'Set command for invoke on request')
  .option('flags', 'Set command flags');

const { port, flags, host, command } = args.parse(process.argv);

if (!command) {
  throw Error('Command must be specified');
}

function requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
  if (req.method === 'OPTIONS') {
    onCorsRequest(res);
    return;
  }

  const { pathname } = new URL(req.url ?? '/', `http://${req.headers.host}`);

  switch (pathname) {
    case '/run':
      onRunRequest(req, res, { command, flags });
      return;
  
    default:
      onHomeRequest(req, res);
      return;
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
