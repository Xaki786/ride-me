const { Customer, Car, Booking, Bill } = require("../../models");
// =============================================================
// CREATE A NEW BOOKING ENTRY IN THE DATABASE AND SEND CUSTOMER BOOKING'S DETAIL
// =============================================================
module.exports = async (req, res, next) => {
  const { customerId } = req.params;
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
  // CAR FOUND, NOW CREATE NEW BOOKING INSTANCE
  // STORE CUSTOMER ID AND CAR ID IN THE BOOKING AND VICE VERSA
  // ----------------------------------------------------------
  const newBooking = new Booking({
    car: dbCar.id
  });
  newBooking.customers.push(dbCustomer.id);
  dbCustomer.bookings.push(newBooking);
  dbCar.bookings.push(newBooking);
  // ----------------------------------------------------------
  //   NOW CREATE A BILL INSTANCE AND SAVE IT'S ID IN BOOKINGS AND VICE VERSA
  // ----------------------------------------------------------
  const newBill = new Bill({
    booking: newBooking.id,
    paid: true
  });
  newBooking.bill = newBill;
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
  // SAVE CAR IN THE DATABASE
  await dbCar.save();
  // SAVE BILL IN THE DATABASE
  await newBill.save();
  // SAVE BOOKING IN THE DATABASE
  await newBooking.save();
  // SEND CUSTOMER BOOKING DETAILS
  return res.status(200).json({
    booking: newBooking
  });
};
