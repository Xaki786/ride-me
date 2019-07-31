const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING BOOKING CONTROLLER METHODS
// ==============================================================
const {
  createBooking,
  getOneBooking,
  updateBooking
} = require("../controllers").bookingController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/customers/:customerId/bookings
// @desc    => CREATE NEW BOOKING FOR A CUTOMER AND SEND IT'S DETAILS
// ---------------------------------------------------
// *******************************************************
// CUSTOMER CAN NOT CREATE BOOKING, CHANGE IT TO THE OWNERS PREVILAGE
router.route("/").post(createBooking);
// *******************************************************
// ---------------------------------------------------
// @route   => /api/users/:userId/customer/:customerId/bookings/:bookingId
// @desc    => VIEW DATA OF ONE BOOKING, UPDATE ALREADY EXISTING BOOKING AND STORE CUSTOMER'S DATA IN IT
// ---------------------------------------------------
router
  .route("/:bookingId")
  .get(getOneBooking)
  .put(updateBooking);
// ==============================================================
module.exports = router;
