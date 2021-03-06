// ============================================================
// IMPORTING ALL THE MODELS AND COMBINING THEM IN AN OBJECT
// ============================================================
const userModel = require("./userModel");
const customerModel = require("./customerModel");
const bookingModel = require("./bookingModel");
const carModel = require("./carModel");
const billModel = require("./billModel");
const ownerModel = require("./ownerModel");
const groupModel = require("./groupModel");
module.exports = {
  User: userModel,
  Customer: customerModel,
  Booking: bookingModel,
  Car: carModel,
  Bill: billModel,
  Owner: ownerModel,
  Group: groupModel
};
