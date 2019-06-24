const { User, Car, Owner, Booking, Bill, Customer } = require("../../models");
// ==============================================================
// IMPORTING USER CONTROLLER METHODS
// ==============================================================
const createOwnerCar = require("./createOwnerCar");
const createUser = require("./createUser");
const getOwnerCars = require("./getOwnerCars");
const getUsers = require("./getUsers");
const getOneUser = require("./getOneUser");
const getOneOwner = require("./getOneOwner");

// ==============================================================
// USER CONTROLLER
// ==============================================================
module.exports = {
  // VALIDATION NOT REQUIRED
  getUsers,
  // VALIDATION: PENDING
  createUser,
  // VALIDATION: PENDING
  getOneUser,
  // VALIDATION: PENDING

  getOneOwner,
  // VALIDATION: PENDING

  login: async (req, res, next) => {
    const token = await generateToken(req.user);
    return res.status(200).json({
      token,
      message: "Logged In"
    });
  },
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  getOwnerCars,
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  createOwnerCar
};
