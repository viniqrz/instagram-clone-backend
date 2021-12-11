import { Express } from 'express';

export const startServer = (app: Express) => {
  app.listen(process.env.PORT, () => console.log('Server is running...'));
};
