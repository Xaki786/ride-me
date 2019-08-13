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
  // CHECK IF CUSTOMER IS PRESENT IN THE GROUP, IF NOT THEN SEND AN ERROR
  // ---------------------------------------------------
  const isCustomerPresent = await dbGroup.isValidCustomer(dbCustomer._id);
  if (!isCustomerPresent) {
    const error = new Error("Customer not member of this group");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  //   REMOVE CUSTOMER FROM GROUP
  // ---------------------------------------------------
  const customerIndex = dbGroup.customers.findIndex(customer =>
    customer._id.equals(dbCustomer._id)
  );
  if (customerIndex > -1) {
    dbGroup.customers.splice(customerIndex, 1);
  }
  // ---------------------------------------------------
  //   REMOVE GROUP FROM CUSTOMER
  // ---------------------------------------------------
  const groupIndex = dbCustomer.groups.findIndex(group =>
    group._id.equals(dbGroup._id)
  );
  if (groupIndex > -1) {
    dbCustomer.groups.splice(customerIndex, 1);
  }
  // ---------------------------------------------------
  //   SAVE  CUSTOMER AND GROUP
  // ---------------------------------------------------
  await dbCustomer.save();
  await dbGroup.save();
  // ---------------------------------------------------
  //   REDIRECT TO THE CUSTOMER'S PROFILE PAGE
  // ---------------------------------------------------
  return res.redirect(`/api/customers/${dbCustomer._id}`);
  // ---------------------------------------------------
};
// ---------------------------------------------------
