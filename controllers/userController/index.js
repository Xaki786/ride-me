const { User, Car, Owner, Booking, Bill, Customer } = require("../../models");
// ==============================================================
// IMPORTING USER CONTROLLER METHODS
// ==============================================================
const createUser = require("./createUser");
const getUsers = require("./getUsers");
const getOneUser = require("./getOneUser");

// ==============================================================
// USER CONTROLLER
// ==============================================================
module.exports = {
  // ====================================================================
  // @route   =>  '/api/users/'
  // @desc    =>  Get all users
  // @method  =>  GET
  // ----------------------------------------------------
  // VALIDATION NOT REQUIRED
  // ----------------------------------------------------
  getUsers,
  // ====================================================================
  // @route   =>  '/api/users/'
  // @desc    =>  Create new user
  // @method  =>  POST
  // VALIDATION: PENDING
  // ----------------------------------------------------
  createUser,
  // ====================================================================
  // @route   =>  '/api/users/'
  // @method  =>  GET
  // @desc    =>  Show user profile
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // ----------------------------------------------------
  getOneUser
  // ====================================================================
};
