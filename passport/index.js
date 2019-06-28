const passport = require("passport");
const JWTStrategy = require("./JWTStrategy");
const LocalStrategy = require("./LocalStrategy");
JWTStrategy();
LocalStrategy();

module.exports = passport;
