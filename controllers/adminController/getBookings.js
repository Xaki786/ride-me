const { Booking } = require("../../models");
// ====================================================================
// GET ALL BOOKINGS FROM DATABASE
// ====================================================================
// @route   =>  /api/admin/bookings
// @method  =>  GET
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  //  FIND ALL BOOKINGS IN THE DATABASE
  // ----------------------------------------------------
  const dbBookings = await Booking.find()
    .populate({
      path: "customers",
      select: "user",
      populate: {
        path: "user",
        select: "local.email name"
      }
    })
    .populate("car", "carNumber")
    .populate("bill");

  // ----------------------------------------------------
  //  IF NO BOOKINGS ARE THERE, THEN SEND USER 404 RESPONSE
  // ----------------------------------------------------
  if (!dbBookings.length > 0) {
    const error = new Error("No Bookings found");
    error.status = 404;
    return next(error);
  }

  // ----------------------------------------------------
  //  BOOKINGS FOUND, PREPARE RESPONSE TO SEND USER DATA
  // ----------------------------------------------------
  const modifiedBookings = [];
  dbBookings.forEach(booking => {
    let currentBooking = {};
    currentBooking.customers = booking.customers.map(customer => ({
      email: customer.user.local.email,
      name: customer.user.name
    }));
    currentBooking.car = booking.car;
    currentBooking.bill = booking.bill;
    modifiedBookings.push(currentBooking);
  });
  // ----------------------------------------------------
  //  SEND USER THIS DATA
  // ----------------------------------------------------
  return res.status(200).json({
    Bookings: modifiedBookings
  });
};
