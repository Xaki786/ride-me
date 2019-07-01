// ==============================================================
// IMPORTING OWNER CONTROLLER METHODS
// ==============================================================
const deleteCar = require("../carController/deleteCar");
const getOneCar = require("../carController/getOneCar");
const createCar = require("../carController/createCar");
const updateCar = require("../carController/updateCar");
const getCars = require("./getCars");
// ==============================================================
module.exports = {
  // ============================================================
  // SHOW ALL CARS OWNED BY THE OWNER
  // ============================================================
  // ROUTE   =>  /api/users/:userId/owner/:ownerId/cars
  // METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  getCars,
  // ============================================================
  // CREATE NEW CAR FOR THE OWNER
  // ============================================================
  // ROUTE   =>  /api/users/:userId/owner/:ownerId/cars
  // METHOD  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  createCar,
  // ============================================================
  // SHOW DATA OF A SPECIFIC CAR
  // ============================================================
  // ROUTE   =>  /api/users/:userId/owner/:ownerId/cars/:carId
  // METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  getOneCar,
  // ============================================================
  // UPDATE A CAR
  // ============================================================
  // ROUTE   =>  /api/users/:userId/owner/:ownerId/cars/:carId
  // METHOD  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  updateCar,
  // =============================================================
  // DELETE A CAR AND DELETE IT'S REFRENCE FROM THE OWNER OBJECT
  // =============================================================
  // ROUTE   =>  /api/users/:userId/owner/:ownerId/cars/:carId
  // METHOD  =>  DELETE
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  deleteCar
  // =============================================================
};
