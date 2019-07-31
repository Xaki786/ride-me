// ====================================================================
// GET LIST OF BOOKED CARS
// ====================================================================
const { User, Customer, Car, Booking } = require("../../models");
// ====================================================================
// @ROUTE   =>  /api/users/:userId/customer/:customerId/cars
// @METHOD  =>  GET
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  // FIND CUSTOMER FROM ID
  // ----------------------------------------------------
  const { userId, customerId } = req.params;
  const dbCustomer = await Customer.findById(customerId).populate({
    path: "bookings",
    select: "car",
    populate: {
      path: "car",
      select: "carNumber"
    }
  });
  // ----------------------------------------------------
  // IF CUSTOMER NOT FOUND, SEND USER AN ERROR OF BAD REQUEST
  // ----------------------------------------------------
  if (!dbCustomer) {
    const error = new Error("Customer Not Found");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------
  // CHECK IF USER PRESENT IN CUSTOMER'S DOCUMENT IS SAME AS PROVIDED IN THE PARAMS
  // ----------------------------------------------------
  const isValidUser = await dbCustomer.isValidUser(userId);
  if (!isValidUser) {
    const error = new Error("Invalid User");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------
  // CUSTOMER FOUND AND USER IN THE PARAMS AND DOCUMENT ARE THE SAME, NOW SEARCH FOR THE DB USER
  // ----------------------------------------------------
  const dbUser = await User.findById(userId);
  // ----------------------------------------------------
  // IF DB USER NOT FOUND, SEND USER AN ERROR
  // ----------------------------------------------------
  if (!dbUser) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  // ----------------------------------------------------
  // GET BOOKING AND FETCH CAR'S DATA FROM RESPECTIVE BOOKING
  // ----------------------------------------------------
  //   console.log(dbCustomer.bookings);
  res.json(dbCustomer);
  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------
};
