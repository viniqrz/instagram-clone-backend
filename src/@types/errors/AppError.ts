import { BaseError } from "./BaseError";


export class AppError extends Error implements BaseError {
  public statusCode: number;

  constructor(code: number, msg: string) {
    super(msg);
    
    this.statusCode = code;
  }
}