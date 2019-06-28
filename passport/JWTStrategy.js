const passport = require("passport");
const { User } = require("../models");
const JWTStrategy = require("passport-jwt").Strategy;
const { jwtSecret } = require("../config");
const { ExtractJwt } = require("passport-jwt");

module.exports = () =>
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
