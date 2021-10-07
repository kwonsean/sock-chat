const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


const indexRouter = require('./routes/index');

app.use('/', indexRouter);

server.listen(3000, () => {
  console.log('Express Server is no listeing on localhost:3000..')
});
