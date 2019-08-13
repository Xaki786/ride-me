const { Group, Customer } = require("../../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND CUSTOMER FROM ID
  // ---------------------------------------------------
  const { customerId } = req.params;
  const dbCustomer = await Customer.findById(customerId);
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF CUSTOMER NOT FOUND OR TEMPORARILY DELETED
  // ---------------------------------------------------
  if (!dbCustomer || dbCustomer.isDeleted) {
    const error = new Error("Invalid Customer");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  // CUSTOMER FOUND, NOW FETCH ALL GROUPS
  // ---------------------------------------------------
  const dbGroups = await Group.find();
  // ---------------------------------------------------
  //   FILTER ALL GROUPS WHICH ARE NOT DELETED TEMPORARILY
  // ---------------------------------------------------
  const Groups = dbGroups.filter(group => group.isDeleted !== true);
  // ---------------------------------------------------
  // SEND LIST OF GROUPS JSON AS RESPONSE
  // ---------------------------------------------------
  if (Groups.length > 0) {
    return res.status(201).json(Groups);
  }
  return res.status(201).json({
    message: "No Groups currently active"
  });
  // ---------------------------------------------------
};
// ---------------------------------------------------
