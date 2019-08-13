// ==============================================================
// IMPORTING OWNER GROUP CONTROLLER METHODS
// ==============================================================
const createGroup = require("./createGroup");
const deleteGroup = require("./deleteGroup");
const getAllGroups = require("./getAllGroups");
const getGroups = require("./getGroups");
const getOneGroup = require("./getOneGroup");
const addCar = require("./addCar");
// ==============================================================
module.exports = {
  // ============================================================
  // VIEW ALL CURRENTLY ACTIVE GROUPS
  // ============================================================
  // @ROUTE   =>  /api/owners/:onwerId/groups/all
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getAllGroups,
  // ============================================================
  // VIEW ALL GROUPS CREATED BY OWNER
  // ============================================================
  // @ROUTE   =>  /api/owners/:onwerId/groups/
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getGroups,
  // ============================================================
  // VIEW SPECIFIC GROUP CREATED BY OWNER
  // ============================================================
  // @ROUTE   =>  /api/owners/:onwerId/groups/:groupId
  // @METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  getOneGroup,
  // ============================================================
  // CREATE NEW GROUP BY OWNER
  // ============================================================
  // @ROUTE   =>  /api/owners/:onwerId/groups
  // @METHOD  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  createGroup,
  // ============================================================
  // DELETE GROUP BY OWNER
  // ============================================================
  // @ROUTE   =>  /api/owners/:onwerId/groups/:groupId
  // @METHOD  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  deleteGroup,
  // ============================================================
  // ADD CAR TO THE GROUP BY OWNER
  // ============================================================
  // @ROUTE   =>  /api/owners/:onwerId/groups/:groupId/cars/:carId
  // @METHOD  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATION: PENDING
  // AUTHORIZATION: PENDING
  // ----------------------------------------------------
  addCar
};
