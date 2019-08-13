// ==============================================================
// IMPORTING ALL CONTROLLERS AND COMBINING THEM IN AN OBJECT
// ==============================================================
const userController = require("./userController/index");
const ownerController = require("./ownerController/index");
const carController = require("./carController/index");
const authController = require("./authController");
const adminController = require("./adminController");
const customerController = require("./customerController");
const bookingController = require("./bookingController");
const ownerGroupController = require("./groupController/ownerGroupController");
const customerGroupController = require("./groupController/customerGroupController");
// ==============================================================
// EXPORTING CONTROLLERS AS NAMED EXPORTS
// ==============================================================
module.exports = {
  userController,
  ownerController,
  carController,
  authController,
  adminController,
  customerController,
  bookingController,
  ownerGroupController,
  customerGroupController
};
