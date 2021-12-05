import { filesRouter } from "./filesRouter";
import { Express } from "express";

export const createRoutes = (app: Express) => {
  app.use(filesRouter);
}
