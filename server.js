const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const questionsRouter = require("./api/questionsRouter");

const server = express();

server.use(helmet());
server.use(cors());

server.use('/questions', questionsRouter);

module.exports = server;
