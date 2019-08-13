// ===========================================================
// UPDATE CUSTOMER PROFILE
// ===========================================================
const { Customer, User } = require("../../models");
// ===========================================================
module.exports = async (req, res, next) => {
  // ------------------------------------------------------------
  const { customerId } = req.params;
  // ------------------------------------------------------------
  // FIND CUSTOMER IN DB
  // ------------------------------------------------------------
  const dbCustomer = await Customer.findById(customerId);
  // ------------------------------------------------------------
  // IF CUSTOMER NOT FOUND OR HAS BEEN TEMPORARILY DELETED, SEND ERROR
  // ------------------------------------------------------------
  if (!dbCustomer || dbCustomer.isDeleted) {
    const error = new Error("Customer not found");
    error.status = 404;
    return next(error);
  }
  // ------------------------------------------------------------
  //   UPDATE CUSTOMER'S PROFILE
  // ------------------------------------------------------------
  const updatedCustomer = await Customer.findByIdAndUpdate(
    customerId,
    req.body,
    {
      new: true
    }
  );
  // ------------------------------------------------------------
  //   REDIRECT TO THE CUSTOMER'S PROFILE
  // ------------------------------------------------------------
  return res.redirect(`/api/customers/${updatedCustomer._id}`);
  // ------------------------------------------------------------
};
