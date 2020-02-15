'use strict';

import mongoose from 'mongoose';
import { mongoUri } from './default.json';

const dbConnect = async () => {
  try {
    const con = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    if (con) console.log('db connected ...');
  } catch (error) {
    console.error(error);
  }
};
export default dbConnect;
