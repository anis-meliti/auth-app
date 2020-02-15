import passportJwt from 'passport-jwt';

import User from '../Model/User';
import { jwtSecret } from '../config/default.json';

const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
};

const getStrategy = passport =>
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const searchRes = User.findOne({ login: jwt_payload.login });
        searchRes ? done(null, searchRes) : done(null, false);
      } catch (error) {
        console.error(error);
      }
    })
  );
export default getStrategy;
