import 'dotenv/config';

import express from 'express';

import { createRoutes } from './routes';
import { createMiddlewares } from './config/server/createMiddlewares';
import { startServer } from './config/server/startServer';
import { createGlobalErrorHandler } from './config/server/createGlobalErrorHandler';
import { connectDatabase } from './config/database';

const app = express();

const start = async () => {
  try {
    connectDatabase(process.env.DB_URL);
    createMiddlewares(app);
    createRoutes(app);
    createGlobalErrorHandler(app);
    startServer(app);
  } catch (err) {
    if (err instanceof Error)
      console.log(`Couldn't start server: ${err.message}`);
  }
};

start();
