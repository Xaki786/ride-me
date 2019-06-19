const userModel = require("./userModel");
const groupModel = require("./groupModel");
const customerModel = require("./customerModel");
const bookingModel = require("./bookingModel");
const carModel = require("./carModel");
const billModel = require("./billModel");
const ownerModel = require("./ownerModel");
module.exports = {
  User: userModel,
  Group: groupModel,
  Customer: customerModel,
  Booking: bookingModel,
  Car: carModel,
  Bill: billModel,
  Owner: ownerModel
};
