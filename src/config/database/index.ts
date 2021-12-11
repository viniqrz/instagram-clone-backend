import { connect } from 'mongoose';

export const connectDatabase = async (url: string) => {
  await connect(url, {
    autoIndex: true,
  });

  console.log('DB succesfully connected!');
};
