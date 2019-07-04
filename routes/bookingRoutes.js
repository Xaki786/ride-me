const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING BOOKING CONTROLLER METHODS
// ==============================================================
const { createBooking } = require("../controllers").bookingController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/users/:userId/customer/:customerId/bookings
// @desc    => CREATE NEW BOOKING FOR A CUTOMER AND SEND IT'S DETAILS
// ---------------------------------------------------
router.route("/").post((req, res, next) => {
  console.log(req.body);
  next();
}, createBooking);
// ==============================================================
module.exports = router;
