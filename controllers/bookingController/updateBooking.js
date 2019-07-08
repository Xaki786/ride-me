const { Customer, Car, Booking, Bill } = require("../../models");
// =============================================================
// EDIT THE ALRREADY STORED BOOKING, AND STORE NEW CUSTOMER'S DATA IN THE BOOKING
// =============================================================
module.exports = async (req, res, next) => {
  const { customerId, bookingId } = req.params;
  const { car } = req.body;
  // ----------------------------------------------------------
  //   FIND CUSTOMER IN THE DATABASE
  // ----------------------------------------------------------
  const dbCustomer = await Customer.findById(customerId);
  // ----------------------------------------------------------
  //  IF CUSTOMER NOT FOUND, SEND USER AN ERROR OF BAD REQUEST
  // ----------------------------------------------------------
  if (!dbCustomer) {
    const error = new Error("Customer Not Found");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------------
  //  CUSTOMER FOUND, CHECK VALIDITY OF THE CAR
  // ----------------------------------------------------------
  const dbCar = await Car.findById(car);
  // ----------------------------------------------------------
  //   IF CAR NOT FOUND, SEND USER AN ERROR
  // ----------------------------------------------------------
  if (!dbCar) {
    const error = new Error("Please select a valid car");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------------
  // CAR FOUND, NOW FIND THE VALIDITY OF EXISTING BOOKING
  const dbBooking = await Booking.findById(bookingId);
  if (!dbBooking) {
    const error = new Error("Invalid Booking");
    error.status = 400;
    return next(error);
  }
  // BOOKING IS VALID, NOW STORE NEW CUSTOMER IN THE BOOKING
  // STORE CUSTOMER ID AND CAR ID IN THE BOOKING AND VICE VERSA
  // ----------------------------------------------------------
  dbBooking.customers.push(dbCustomer.id);
  dbCustomer.bookings.push(dbBooking);

  // ----------------------------------------------------------
  //   ADD OTHER OPTIONAL FIELDS TO THE BOOKING INSTANCE
  // ----------------------------------------------------------
  // "priority": "Number(confused)",
  //   "readingStart": "Number",
  //   "readingEnd": "Number",
  //   "distance": "Number(end-start)",
  //   "petrolUsed": "Number",
  //   "checkInPlace": "String",
  //   "checkOutPlace": "String",
  //   "damageCost": "Number"
  // ----------------------------------------------------------
  // SAVE CUSTOMER IN THE DATABASE
  await dbCustomer.save();

  // SAVE BOOKING IN THE DATABASE
  await dbBooking.save();
  // REDIRECT USER TO THE VIEW BOOKING PAGE
  return res.redirect(
    `/api/users/${dbCustomer.user}/customer/${customerId}/bookings/${
      dbBooking.id
    }`
  );
};
