'use strict';

import bcrypt from 'bcryptjs';

import User from '../Model/User';

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
          ? console.log(error)
          : bcrypt.hash(newUser.password, salt, async (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              try {
                const addResult = await newUser.save();
                res.status(200).json(addResult);
              } catch (error) {
                console.error(error);
              }
            });
      });
    } catch (error) {
      console.error(error);
    }
  }
};

export default registerController;
