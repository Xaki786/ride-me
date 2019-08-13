const { Group, Customer } = require("../../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND CUSTOMER FROM ID
  // ---------------------------------------------------
  const { customerId } = req.params;
  const dbCustomer = await Customer.findById(customerId).populate("groups");
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF CUSTOMER NOT FOUND OR TEMPORARILY DELETED
  // ---------------------------------------------------
  if (!dbCustomer || dbCustomer.isDeleted) {
    const error = new Error("Invalid Customer");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  //   FILTER ALL GROUPS WHICH ARE NOT DELETED TEMPORARILY
  // ---------------------------------------------------
  const Groups = dbCustomer.groups.filter(group => group.isDeleted !== true);
  // ---------------------------------------------------
  // SEND LIST OF GROUPS JSON AS RESPONSE
  // ---------------------------------------------------
  if (Groups.length > 0) {
    return res.status(201).json(Groups);
  }
  return res.status(201).json({
    message: "Customer is not member of any group"
  });
  // ---------------------------------------------------
};
// ---------------------------------------------------
