'use strict';
import express from 'express';
import { validate, credValidation } from '../Middlewares/validation';
import registerController from '../Controllers/registration.controller';
import isAuth from '../Middlewares/passport-Setup';
import passport from 'passport';

const Router = express.Router();

Router.post(
  '/register',
  credValidation(),
  validate,
  registerController.register
);
Router.post('/login', credValidation(), validate, registerController.logIn);
Router.get(
  '/user',
  passport.authenticate('jwt', { session: false }),
  registerController.current
);

export default Router;
