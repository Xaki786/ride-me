// ==============================================================
// IMPORTING CUSTOMER GROUP CONTROLLER METHODS
// ==============================================================
const getAllGroups = require("./getAllGroups");
const getGroups = require("./getGroups");
const getOneGroup = require("./getOneGroup");
const addCustomer = require("./addCustomer");
const removeCustomer = require("./removeCustomer");
// ==============================================================
module.exports = {
  // ============================================================
  // FETCH LIST OF ALL CURRENTLY ACTIVE GROUPS
  // ============================================================
  // @ROUTE   =>  /api/customers/:customerId/groups/all
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getAllGroups,
  // ============================================================
  // FETCH LIST OF CUSTOMER SUBSCRIBED GROUPS
  // ============================================================
  // @ROUTE   =>  /api/customers/:customerId/groups/
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getGroups,
  // ============================================================
  // FETCH SPECIFIC GROUP  DETAILS
  // ============================================================
  // @ROUTE   =>  /api/customers/:customerId/groups/:groupId
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getOneGroup,
  // ============================================================
  // ADD CUSTOMER TO THE GROUP
  // ============================================================
  // @ROUTE   =>  /api/customers/:customerId/groups/:groupId
  // @METHOD  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  addCustomer,
  // ============================================================
  // REMOVE CUSTOMER FROM THE GROUP
  // ============================================================
  // @ROUTE   =>  /api/customers/:customerId/groups/:groupId
  // @METHOD  =>  DELETE
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  removeCustomer
};
