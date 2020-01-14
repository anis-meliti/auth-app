'use strict';
import express from 'express';
import dbConnect from './config/dbConnect';

const app = express();

app.use(express.json());
dbConnect();
const PORT = process.env.PORT || 5000;

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`🚀 is running on ${PORT}`)
);
