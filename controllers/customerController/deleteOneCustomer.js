// ====================================================================
// DELETE CUSTOMER OF THE CAR
// ====================================================================
const { Customer } = require("../../models");
// ====================================================================
// @ROUTE   =>  /api/customers/:customerId/
// @METHOD  =>  DELETE
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  // FIND CUSTOMER FROM ID
  // ----------------------------------------------------
  const { customerId } = req.params;
  const dbCustomer = await Customer.findById(customerId);
  // ----------------------------------------------------
  // IF CUSTOMER NOT FOUND, SEND USER AN ERROR OF BAD REQUEST
  // ----------------------------------------------------
  if (!dbCustomer) {
    const error = new Error("Customer Not Found");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------
  // DELETE THE CUSTOMER BY CHANGING IT'S isDeleted FLAG TO TRUE
  // ----------------------------------------------------
  dbCustomer.isDeleted = true;
  await dbCustomer.save();
  // ----------------------------------------------------
  // REDIRECT USER TO THE GET USERS API
  // ----------------------------------------------------
  return res.status(200).json({
    message: "Customer profile successfully deleted"
  });
  // ----------------------------------------------------
};
