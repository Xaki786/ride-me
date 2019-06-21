// ==============================================================
// GENERATING TOKENS FOR AUTHORIZED USER
// ==============================================================
const JWT = require("jsonwebtoken");
const { jwtSecret } = require("../../config");
module.exports = generateToken = user => {
  return JWT.sign(
    {
      issuer: "ride-me-app",
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 2)
    },
    jwtSecret
  );
};
