import crypto from 'crypto';

export const createHash = (text: string) => {
  return crypto.createHash('sha256').update(text).digest('hex');
};
