import path from 'path';

import express, { Express } from 'express';

import { userRouter } from './userRouter';
import { postRouter } from './postRouter';

export const createRoutes = (app: Express) => {
  app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
  );

  app.use('/users', userRouter);
  app.use('/posts', postRouter);
};
