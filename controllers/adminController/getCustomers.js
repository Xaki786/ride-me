const { Customer } = require("../../models");
// ====================================================================
// GET ALL CUSTOMERS FROM DATABASE
// ====================================================================
// @route   =>  /api/admin/customers/
// @method  =>  GET
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  //  FIND ALL CUSTOMERS IN THE DATABASE
  // ----------------------------------------------------
  const dbCustomers = await Customer.find();
  // ----------------------------------------------------
  //  IF NO CUSTOMERS ARE THERE, THEN SEND USER 404 RESPONSE
  // ----------------------------------------------------
  if (!dbCustomers.length > 0) {
    const error = new Error("No Customers found");
    error.status = 404;
    return next(error);
  }
  // ----------------------------------------------------
  //  CUSTOMERS FOUND, SEND USER THIS DATA
  // ----------------------------------------------------
  return res.status(200).json({
    customers: dbCustomers
  });
};
