const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// ? /은 메인페이지
app.get('/', (req, res) => {
  res.send('Express work!');
});

server.listen(3000, () => {
  console.log('Express Server is no listeing on localhost:3000..')
});
