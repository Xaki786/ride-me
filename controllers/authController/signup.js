// ==========================================================
// SIGN UP USER API
// ==========================================================
const { createUser } = require("../userController");
// ----------------------------------------------------
// WHENEVER A NEW USER WANTS TO REGISTER THROUGH THIS END POINT, USE CREATE USER API FROM USER CONTROLLER    TO CREATE A NEW USER.
// ----------------------------------------------------
module.exports = createUser;
