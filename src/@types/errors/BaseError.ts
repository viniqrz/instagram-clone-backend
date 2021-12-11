export interface BaseError extends Error {
  statusCode: number;
  code?: number;
  keyValue?: any;
}
