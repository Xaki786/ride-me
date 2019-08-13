const { Group, Customer } = require("../../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND CUSTOMER FROM ID
  // ---------------------------------------------------
  const { customerId, groupId } = req.params;
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
  // CUSTOMER FOUND, NOW FETCH GROUP DETAILS
  // ---------------------------------------------------
  const dbGroup = await Group.findById(groupId)
    .populate({
      path: "owner",
      select: "name"
    })
    .populate("customers", "name");
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF GROUP NOT FOUND OR TEMPORARILY DELETED
  // ---------------------------------------------------
  if (!dbGroup || dbGroup.isDeleted) {
    const error = new Error("Invalid Group");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  // SEND GROUP AS A RESPONSE TO THE CUSTOMER
  // ---------------------------------------------------
  return res.status(200).json({
    Group: dbGroup
  });
  // ---------------------------------------------------
};
// ---------------------------------------------------
