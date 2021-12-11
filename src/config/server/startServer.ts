import { Express } from 'express';

export const startServer = (app: Express) => {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
};
