const app = require('./app');

const port = 3333;

app.listen(`${port}`, err => {
  if (err) {
    console.log('Aconteceu um erro...', err);
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
