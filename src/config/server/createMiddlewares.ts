import express, { Express } from "express"
import morgan from 'morgan';

export const createMiddlewares = (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
}