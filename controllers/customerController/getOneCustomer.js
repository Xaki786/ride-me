// ====================================================================
// SHOW PROFILE OF THE CUSTOMER
// ====================================================================
// @route   =>  /api/users/:userId/customer/:customerId/
// @method  =>  GET
// ----------------------------------------------------
const { User, Customer } = require("../../models");
module.exports = async (req, res, next) => {
  const { userId, customerId } = req.params;
  // FIND USER IN THE DATABASE
  const dbUser = await User.findById(userId);

  // IF USER IS NOT PRESENT IN THE DATABASE, SEND THE ERROR
  if (!dbUser) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  // USER IS PRESENT, NOW FETCH THE CUSTOMER AND ITS RESPECTIVE BOOKINGS DATA FROM DATABASE
  const dbCustomer = await Customer.findById(customerId).populate("bookings");

  // IF CUSTOMER IS NOT PRESENT IN THE DATABASE, SEND THE ERROR
  if (!dbCustomer) {
    const error = new Error("Customer Not Found");
    error.status = 404;
    return next(error);
  }

  // OWNER IS PRESENT, NOW SEND IT'S INFORMATION TO THE USER
  return res.status(200).json({
    customer: dbCustomer
  });
};
