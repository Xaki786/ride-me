const passport = require("passport");
const { User } = require("../models");
const LocalStrategy = require("passport-local").Strategy;
// ================================================================
module.exports = () =>
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
