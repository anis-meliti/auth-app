'use strict';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../Model/User';
import { jwtSecret } from '../config/default.json';

const registerController = {
  register: async (req, res) => {
    const { login, password } = req.body;

    try {
      const searchResult = await User.findOne({ login });
      if (searchResult) return res.status(400).json({ msg: 'bad credential!' });
      const newUser = new User({
        login,
        password
      });
      bcrypt.genSalt(10, (error, salt) => {
        error
          ? res.json({ error: error })
          : bcrypt.hash(newUser.password, salt, async (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              try {
                const addResult = await newUser.save();
                res.status(200).json(addResult);
              } catch (error) {
                res.json({ error: error });
              }
            });
      });
    } catch (error) {
      res.json({ error: error });
    }
  },
  logIn: async (req, res) => {
    const { login, password } = req.body;
    try {
      const searchResult = await User.findOne({ login });
      if (!searchResult) return res.status(500).json({ msg: 'bad credential' });
      const isMatch = await bcrypt.compare(password, searchResult.password);
      if (isMatch) {
        const payload = {
          id: searchResult._id,
          login: searchResult.login
        };
        jwt.sign(payload, jwtSecret, (err, token) => {
          if (err) throw err;
          res.json({ token: 'Bearer' + token });
        });
      } else res.status(500).json({ msg: 'bad credential!' });
    } catch (error) {
      res.json({ error: error });
    }
  },
  current: (req, res) => {
    res.json(req.user);
  }
};

export default registerController;
