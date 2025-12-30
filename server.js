const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const PORT = 3000;

// Middleware para parsear JSON
server.use(express.json());

// Suas rotas custom
server.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

server.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ received: data, message: 'Dados recebidos com sucesso!' });
});

// Para todas as outras rotas, passar para Next.js
server.get('*', (req, res) => {
  return handle(req, res);
});

app.prepare().then(() => {
  server.listen(PORT, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});