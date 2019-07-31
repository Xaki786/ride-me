// ==============================================================
// GENERATING TOKENS FOR AUTHORIZED USER
// ==============================================================
const JWT = require("jsonwebtoken");
const { jwtSecret } = require("../config");
module.exports = generateToken = user => {
  return JWT.sign(
    {
      issuer: "ride-me-app", //optional
      sub: user.id, // compuslory => compulsory it is a piece of information to identify registered user
      iat: new Date().getTime(), // optional => time at which token was signed => default is curent time
      exp: new Date().setDate(new Date().getDate() + 2) // optional => time after which token would be expired
    },
    jwtSecret // compulsory => this secret is used for decoding the token
  );
};
