// ====================================================================
// SHOW PROFILE OF THE CUSTOMER
// ====================================================================
// @route   =>  /api/users/:userId/customer/:customerId/
// @method  =>  GET
// ----------------------------------------------------
const { Customer } = require("../../models");
module.exports = async (req, res, next) => {
  const { customerId } = req.params;
  // ----------------------------------------------------
  // FETCH THE CUSTOMER AND ITS RESPECTIVE BOOKINGS DATA FROM DATABASE
  // ----------------------------------------------------
  const dbCustomer = await Customer.findById(customerId).populate("bookings");

  // ----------------------------------------------------
  // IF CUSTOMER IS NOT PRESENT IN THE DATABASE OR HAS BEEN DELETED TEMPORARILY, SEND THE ERROR
  // ----------------------------------------------------
  if (!dbCustomer || dbCustomer.isDeleted) {
    const error = new Error("Customer Not Found");
    error.status = 404;
    return next(error);
  }

  // ----------------------------------------------------
  // OWNER IS PRESENT, NOW SEND IT'S INFORMATION TO THE USER
  // ----------------------------------------------------
  return res.status(200).json({
    customer: dbCustomer
  });
};
