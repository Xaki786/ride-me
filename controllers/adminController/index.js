// ==============================================================
// IMPORTING ADMIN CONTROLLER METHODS
// ==============================================================
const getOwners = require("./getOwners");
const getCustomers = require("./getCustomers");
const getUsers = require("./getUsers");
const getCars = require("./getCars");
module.exports = {
  // ====================================================================
  // GET ALL OWNERS FROM DATABASE
  // ====================================================================
  // @route   =>  /api/admin/owners/
  // @method  =>  GET
  // ----------------------------------------------------
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getOwners,
  // ====================================================================
  // GET ALL CUSTOMERS FROM DATABASE
  // ====================================================================
  // @route   =>  /api/admin/customers/
  // @method  =>  GET
  // ----------------------------------------------------
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getCustomers,
  // ====================================================================
  // GET ALL USERS FROM DATABASE
  // ====================================================================
  // @route   =>  /api/admin/users/
  // @method  =>  GET
  // ----------------------------------------------------
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getUsers,
  // ====================================================================
  // GET ALL CARS FROM DATABASE
  // ====================================================================
  // @route   =>  /api/admin/cars/
  // @method  =>  GET
  // ----------------------------------------------------
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getCars
};

// get users
// get customers
