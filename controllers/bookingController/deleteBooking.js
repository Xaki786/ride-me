// ****************************************************************
// NOT CLEAR YET HOW IT IS GOING TO BE IMLEMENTED
// CUSTOMER CAN DETACH HIMSELF FROM THIS SPECIFIC BOOKNG
// ****************************************************************
const { Booking, Customer } = require("../../models");
module.exports = async (req, res, next) => {
  // -------------------------------------------------------
  // GET => /api/users/:userId/customer/:customerId/bookings/:bookingId
  // -------------------------------------------------------
  const { bookingId, customerId } = req.params;
  // -------------------------------------------------------
  // FIND BOOKING
  // -------------------------------------------------------
  const dbBooking = await Booking.findById();
  // -------------------------------------------------------
  // CHECK IF IT IS VALID
  // -------------------------------------------------------
  if (!dbBooking) {
    const error = new Error("Booking Not Found");
    error.status = 404;
    return next(error);
  }
  // -------------------------------------------------------
  // FIND RESPECTIVE CUSTOMER
  // -------------------------------------------------------
  const dbCustomer = await Customer.findById(customerId);
  if (!dbCustomer) {
    const error = new Error("Customer Not Found");
    error.status = 404;
    return next(error);
  }
  // CHECK IF IT IS VALID AND IT BELONGS TO THE BOOKING
  const isValidCustomer = await dbBooking.isValidCustomer(customerId);
  if (!isValidCustomer) {
    const error = new Error("Invalid Customer");
    error.status = 400;
    return next(error);
  }
  // FIND CAR FROM BOOKING
  // CHECK IF IT IS VALID
  // CHECK CAR IN THE DATABASE AND IT BELONGS TO THE BOOKING
  // -------------------DELETE PROCESS-----------------------
  // GO TO
};
