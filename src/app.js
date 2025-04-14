import express from 'express';
import routes from './routes.js';
import './database/index.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const corsOptions = {
  origin: [
    'https://dev-burger-interface-rggf.vercel.app',
    'https://server-devburger-production.up.railway.app',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
  constructor() {
    this.app = express();
    this.app.use(cors(corsOptions));

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
