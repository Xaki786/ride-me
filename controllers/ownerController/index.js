// ==============================================================
// IMPORTING OWNER CONTROLLER METHODS
// ==============================================================
const createOwnerCar = require("./createOwnerCar");
const updateOwnerCar = require("./updateOwnerCar");
const getOwnerCars = require("./getOwnerCars");
const getOneOwner = require("./getOneOwner");
const deleteOwnerCar = require("./deleteOwnerCar");
const showOwnerCar = require("./showOwnerCar");
// ==============================================================
// OWNER CONTROLLER
// ==============================================================
module.exports = {
  // ====================================================================
  // SHOW PROFILE OF THE OWNER
  // ====================================================================
  // @route   =>  /api/users/:userId/owner/:ownerId/
  // @method  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // ----------------------------------------------------
  getOneOwner,
  // ====================================================================
  // SHOW ALL CARS OWNED BY THE OWNER
  // ====================================================================
  // @route   =>  /api/users/:userId/owner/:ownerId/cars
  // @method  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  getOwnerCars,
  // ====================================================================
  // CREATE NEW CAR FOR THE OWNER
  // ====================================================================
  // @route   =>  /api/users/:userId/owner/:ownerId/cars
  // @method  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  createOwnerCar,
  // ====================================================================
  // @desc    =>  create new car for the owner
  // ====================================================================
  // @route   =>  /api/users/:userId/owner/:ownerId/cars/:carId
  // @method  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  updateOwnerCar,
  deleteOwnerCar,
  showOwnerCar
  // ====================================================================
};
