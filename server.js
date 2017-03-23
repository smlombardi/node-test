const express = require('express');
const http = require('http');
const config = require('./server.config.js');

const app = express();

const hostname = config.host;
const port = process.env.port || config.port;

app.get('/', function (req, res) {
  res.end('foo bar');
});

app.get('/test:name', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ id: 1, name: req.params.name }));
});

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

