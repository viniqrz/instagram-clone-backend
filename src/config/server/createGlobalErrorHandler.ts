import { Express } from "express";
import { globalErrorHandler } from "../../middlewares/globalErrorHandler"

export const createGlobalErrorHandler = (app: Express) => {
  app.use(globalErrorHandler);
}
