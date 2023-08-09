import http from 'node:http';

export function onCorsRequest(res: http.ServerResponse) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
  };

  res.writeHead(204, headers);
  res.end();
}