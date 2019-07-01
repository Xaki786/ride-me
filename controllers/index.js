// ==============================================================
// IMPORTING ALL CONTROLLERS AND COMBINING THEM IN AN OBJECT
// ==============================================================
const userController = require("./userController/index");
const ownerController = require("./ownerController/index");
const carController = require("./carController/index");
const authController = require("./authController");
// ==============================================================
// EXPORTING CONTROLLERS AS NAMED EXPORTS
// ==============================================================
module.exports = {
  userController,
  ownerController,
  carController,
  authController
};
