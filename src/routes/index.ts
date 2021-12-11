import path from 'path';

import express, { Express } from 'express';

import { userRouter } from './userRouter';
import { postRouter } from './postRouter';
import { fileRouter } from './fileRouter';

export const createRoutes = (app: Express) => {
  app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
  );

  app.use('/files', fileRouter);
  app.use('/users', userRouter);
  app.use('/posts', postRouter);
};
