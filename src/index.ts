import 'dotenv/config';

import express from 'express';

import { createRoutes } from './routes';
import { createMiddlewares } from './config/server/createMiddlewares';
import { startServer } from './config/server/startServer';
import { createGlobalErrorHandler } from './config/server/createGlobalErrorHandler';

const app = express();

const start = async () => {
  try {
    createMiddlewares(app);
    createRoutes(app);
    startServer(app);
    createGlobalErrorHandler(app);
  } catch(err) {
    if (err instanceof Error) console.log(`Couldn't start server: ${err.message}`);
  }
}

start();
