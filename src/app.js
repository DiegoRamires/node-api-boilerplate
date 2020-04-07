import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';
import middlwares from './lib/middlewares';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(morgan('common'));
    this.server.use(helmet());
  }

  routes() {
    this.server.use(routes);

    this.server.use(middlwares.notFound);
    this.server.use(middlwares.errorHandler);
  }
}

export default new App().server;
