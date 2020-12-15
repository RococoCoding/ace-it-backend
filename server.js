const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(cors());

server.use('/', (req, res) => {
  console.log('testing')
})

module.exports = server;
