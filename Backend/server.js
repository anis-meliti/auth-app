'use strict';
import express from 'express';
import dbConnect from './config/dbConnect';
import user from './Routes/user';

const app = express();

app.use(express.json());
dbConnect();
//@User route
app.use('/', user);
const PORT = process.env.PORT || 5000;

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`🚀 is running on ${PORT}`)
);
