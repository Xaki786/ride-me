const passport = require("passport");
const { User } = require("../models");
const JWTStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { jwtSecret } = require("../config");
const { ExtractJwt } = require("passport-jwt");

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: jwtSecret
    },
    async (jwtPayload, done) => {
      try {
        const dbUser = await User.findById(jwtPayload.sub);
        if (!dbUser) {
          return done(null, false);
        }
        return done(null, dbUser);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, hash, done) => {
      try {
        const dbUser = await User.findOne({ "local.email": email });
        if (!dbUser) {
          return done(null, false);
        }
        const isMatch = await dbUser.isValidPassword(hash);
        if (!isMatch) {
          return done(null, false);
        }
        return done(null, dbUser);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
module.exports = passport;
