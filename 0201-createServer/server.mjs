import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const url = new URL(req.url, 'http://localhost');
  const cor = url.searchParams.get('cor');
  const tamanho = url.searchParams.get('tamanho');
  console.log(req.headers['content-type']);
  console.log(req.rawHeaders);

  if (req.method === 'GET' && url.pathname === '/') {
    res.statusCode = 200;
    res.end('Home!');
  } else if (req.method === 'POST' && url.pathname === '/produtos') {
    res.statusCode = 201;
    res.end(`Produtos: ${cor}, ${tamanho}`);
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada!');
  }
  console.log(req.method);
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
