// ==============================================================
// IMPORTING OWNER CONTROLLER METHODS
// ==============================================================
const getOneOwner = require("./getOneOwner");
const changeOwnerType = require("./changeOwnerType");
const updateOwner = require("./updateOwner");
const deleteOneOwner = require("./deleteOneOwner");
// ==============================================================
// OWNER CONTROLLER
// ==============================================================
module.exports = {
  // ====================================================================
  // SHOW PROFILE OF THE OWNER
  // ====================================================================
  // @ROUTE   =>  /api/owners/:ownerId/
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getOneOwner,
  // ====================================================================
  // UPDATE PROFILE OF THE OWNER
  // ====================================================================
  // @ROUTE   =>  /api/owners/:ownerId/
  // @METHOD  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  updateOwner,
  // ====================================================================
  // CHANGE USER TYPE FROM OWNER TO CUSTOMER
  // ====================================================================
  // @ROUTE   =>  /api/owners/:ownerId/change-type
  // @METHOD  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  changeOwnerType,
  // ====================================================================
  // DELETE PROFILE OF THE OWNER
  // ====================================================================
  // @ROUTE   =>  /api/owners/:ownerId/
  // @METHOD  =>  DELETE
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  deleteOneOwner
};
