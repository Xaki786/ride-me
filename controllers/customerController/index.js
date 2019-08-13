// ==============================================================
// IMPORTING CUSTOMER CONTROLLER METHODS
// ==============================================================
const getOneCustomer = require("./getOneCustomer");
const changeCustomerType = require("./changeCustomerType");
const updateCustomer = require("./updateCustomer");
const deleteOneCustomer = require("./deleteOneCustomer");
const getBookedCars = require("./getBookedCars");
// ==============================================================
// CUSTOMER CONTROLLER
// ==============================================================
module.exports = {
  // ====================================================================
  // SHOW PROFILE OF THE CUSTOMER
  // ====================================================================
  // @ROUTE   =>  /api/customers/:customerId/
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getOneCustomer,
  // ====================================================================
  // UPDATE PROFILE OF THE CUSTOMER
  // ====================================================================
  // @ROUTE   =>  /api/customers/:customerId/
  // @METHOD  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  updateCustomer,
  // ====================================================================
  // DELETE PROFILE OF THE CUSTOMER
  // ====================================================================
  // @ROUTE   =>  /api/customers/:customerId/
  // @METHOD  =>  DELETE
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  deleteOneCustomer,
  // ====================================================================
  // UPDATE PROFILE OF THE CUSTOMER
  // ====================================================================
  // @ROUTE   =>  /api/customers/:customerId/
  // @METHOD  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  changeCustomerType,
  getBookedCars
};
