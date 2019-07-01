// ==============================================================
// IMPORTING AUTH CONTROLLER METHODS
// ==============================================================
const login = require("./login");
const signup = require("./signup");
// ==============================================================
module.exports = {
  // ============================================================
  // LOGIN USER API
  // ============================================================
  // ROUTE   =>  '/api/users/auth/login'
  // DESC    =>  LOGIN USER BY USING PASSPORT LOCAL STRATEGY, GENERATE TOKEN AND REDIRECT TO THE PROFILE                 PAGE.
  // METHOD  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // ----------------------------------------------------
  login,
  // ============================================================
  // SIGN UP USER API
  // ============================================================
  // ROUTE   =>  '/api/users/auth/signup'
  // DESC    =>  SIGNUP USER, GENERATE TOKEN AND REDIRECT TO THE PROFILE PAGE.
  // METHOD  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // ----------------------------------------------------
  signup
  // ============================================================
};
