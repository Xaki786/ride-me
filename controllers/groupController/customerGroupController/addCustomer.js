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
  // CUSTOMER FOUND, NOW FETCH GROUP FROM DATABASE
  // ---------------------------------------------------
  const dbGroup = await Group.findById(groupId);
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF GROUP NOT FOUND OR TEMPORARILY DELETED
  // ---------------------------------------------------
  if (!dbGroup || dbGroup.isDeleted) {
    const error = new Error("Invalid Group");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  // CHECK IF CUSTOMER IS ALREADY PRESENT IN THE GROUP, THEN SEND AN ERROR
  // ---------------------------------------------------
  const isCustomerPresent = await dbGroup.isValidCustomer(dbCustomer._id);
  if (isCustomerPresent) {
    const error = new Error("Customer is already present in this group");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  //   CHECK WHETHER IS GROUP IS ALREADY FULL(No of customers are less than 5), THEN SEND AN ERROR
  // ---------------------------------------------------
  const isFull = await dbGroup.isFull();
  if (isFull) {
    const error = new Error("Group has reached it's limit");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  dbCustomer.groups.push(dbGroup._id);
  dbGroup.customers.push(dbCustomer._id);
  // ---------------------------------------------------
  //   SAVE CUSTOMER AND GROUP
  // ---------------------------------------------------
  await dbCustomer.save();
  await dbGroup.save();
  // ---------------------------------------------------
  // REDIRECT CUSTOMER TO THE SPECIFIC GROUP PAGE
  // ---------------------------------------------------
  return res.redirect(`/api/customers/${dbCustomer._id}/groups/${dbGroup._id}`);
  // ---------------------------------------------------
};
// ---------------------------------------------------
