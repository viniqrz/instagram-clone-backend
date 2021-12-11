import { connect } from 'mongoose';

export const connectDatabase = async (url: string) => {
  await connect(process.env.DB_URL, {
    autoIndex: true,
  });

  console.log('DB succesfully connected!');
};
