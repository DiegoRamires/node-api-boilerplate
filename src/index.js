const express = require("express");
const morgan = require("morgan");

const server = express();
const port = 3333;

server.use(morgan("common"));

server.listen(`${port}`, err => {
  if (err) {
    console.log("Aconteceu um erro...", err);
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
