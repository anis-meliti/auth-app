'use strict';
import express from 'express';
import { validate, credValidation } from '../Middlewares/validation';
import registerController from '../Controllers/registration.controller';

const Router = express.Router();

Router.post(
  '/register',
  credValidation(),
  validate,
  registerController.register
);
Router.post('/login', credValidation(), validate, registerController.logIn);

export default Router;
