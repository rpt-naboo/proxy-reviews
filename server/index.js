const express = require('express');
const request = require('request');
const servers = require('./servers.js');

let cur = 0;

const handler = (req, res) => {
  req.pipe(request({ url: servers[cur] + req.url })).pipe(res);
  cur = (cur + 1) % servers.length;
};

const server = express().get('*', handler).post('*', handler);

server.listen(8080, function() {
  console.log('Now listening on port 8080.');
}); // change this later?