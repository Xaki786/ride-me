// ==============================================================
// IMPORTING CUSTOMER CONTROLLER METHODS
// ==============================================================
const getOneCustomer = require("./getOneCustomer");
const deleteOneCustomer = require("./deleteOneCustomer");
// ==============================================================
// CUSTOMER CONTROLLER
// ==============================================================
module.exports = {
  // ====================================================================
  // SHOW PROFILE OF THE CUSTOMER
  // ====================================================================
  // @ROUTE   =>  /api/users/:userId/customer/:customerId/
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getOneCustomer,
  // ====================================================================
  // DELETE PROFILE OF THE CUSTOMER
  // ====================================================================
  // @ROUTE   =>  /api/users/:userId/customer/:customerId/
  // @METHOD  =>  DELETE
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  deleteOneCustomer
};
