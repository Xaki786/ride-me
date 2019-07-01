// ==============================================================
// IMPORTING OWNER CONTROLLER METHODS
// ==============================================================
const getOneOwner = require("./getOneOwner");
const deleteOneOwner = require("./deleteOneOwner");
// ==============================================================
// OWNER CONTROLLER
// ==============================================================
module.exports = {
  // ====================================================================
  // SHOW PROFILE OF THE OWNER
  // ====================================================================
  // @ROUTE   =>  /api/users/:userId/owner/:ownerId/
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getOneOwner,
  // ====================================================================
  // DELETE PROFILE OF THE OWNER
  // ====================================================================
  // @ROUTE   =>  /api/users/:userId/owner/:ownerId/
  // @METHOD  =>  DELETE
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  deleteOneOwner
};
