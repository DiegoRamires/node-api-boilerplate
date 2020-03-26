require('dotenv/config');
const app = require('./app');

const port = process.env.PORT || 3333;

app.listen(`${port}`, err => {
  if (err) {
    console.log('Something went wrong...', err);
  } else {
    console.log(`The server is running on PORT ${port}`);
  }
});
