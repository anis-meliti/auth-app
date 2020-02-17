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
        const searchRes = await User.findById(jwt_payload.id);
        searchRes ? done(null, searchRes) : done(null, false);
      } catch (error) {
        console.error(error);
      }
    })
  );
export const isAuth = () => passport.authenticate('jwt', { session: false });
export default getStrategy;
