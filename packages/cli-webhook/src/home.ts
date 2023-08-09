import http from 'node:http';


const indexHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style> pre { margin: 0 } </style>
  <script>
    let lastChunkEnd = 0;
    const xhr = new XMLHttpRequest();
    xhr.onprogress = () => {
      const currentChunkEnd = xhr.responseText.length;
      if (lastChunkEnd == currentChunkEnd) return;
      const newData = xhr.responseText.slice(lastChunkEnd, currentChunkEnd);
      lastChunkEnd = currentChunkEnd;
      const pre = document.createElement('pre');
      pre.innerHTML = newData;
      document.body.appendChild(pre);
    };
    xhr.open("GET", "/run");
    xhr.send();
  </script>
</head>
<body>
</body>
</html>`;

export function onHomeRequest(req: http.IncomingMessage, res: http.ServerResponse) {
  // const headers = {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  //   'Access-Control-Max-Age': 0,
  // };

  res.writeHead(200);
  res.write(indexHtml);
  res.end();
}