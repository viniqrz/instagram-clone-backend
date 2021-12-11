import { filesRouter } from './filesRouter';
import { Express } from 'express';
import { userRouter } from './userRouter';
import { postRouter } from './postRouter';

export const createRoutes = (app: Express) => {
  app.use(filesRouter);
  app.use(userRouter);
  app.use(postRouter);
};
