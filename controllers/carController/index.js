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
  // ====================================================================
  // SHOW ALL CARS OWNED BY THE OWNER
  // ====================================================================
  // @route   =>  /api/users/:userId/owner/:ownerId/cars
  // @method  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  getCars,
  // ====================================================================
  // CREATE NEW CAR FOR THE OWNER
  // ====================================================================
  // @route   =>  /api/users/:userId/owner/:ownerId/cars
  // @method  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  createCar,
  // ====================================================================
  // @desc    =>  create new car for the owner
  // ====================================================================
  // @route   =>  /api/users/:userId/owner/:ownerId/cars/:carId
  // @method  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  updateCar,
  deleteCar,
  getOneCar
  // ====================================================================
};
