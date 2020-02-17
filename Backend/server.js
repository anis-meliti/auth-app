'use strict';
import express from 'express';
import dbConnect from './config/dbConnect';
import user from './Routes/user';
import passport from 'passport';
import getStrategy from './Middlewares/passport-Setup';

const app = express();

app.use(express.json());
passport.initialize();
dbConnect();
getStrategy(passport);
//@User route
app.use('/', user);
const PORT = process.env.PORT || 5000;

app.listen(PORT, err =>
  err ? console.error(err) : console.log(`🚀 is running on ${PORT}`)
);
