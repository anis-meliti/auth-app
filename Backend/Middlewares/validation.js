'use strict';
import { check, validationResult } from 'express-validator';

export const credValidation = () => [
  check('login', 'this field is required!').notEmpty(),
  check('password', 'this field is required').notEmpty(),
  check('password', 'this field require min length 6 char').isLength({ min: 6 })
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  !errors.isEmpty() ? res.status(400).json({ errors: errors.array() }) : next();
};
