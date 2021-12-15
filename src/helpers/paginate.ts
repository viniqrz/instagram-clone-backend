import { AppError } from '../@types/errors/AppError';

export const paginate = (query: any) => {
  const page = Number(query.page || 1);
  const offset = Number(query.offset || 10);
  const skip = (page - 1) * offset;
  const limit = offset;

  if (offset > 100) throw new AppError(400, 'Offset is too large (max 100).');

  return { skip, limit };
};
