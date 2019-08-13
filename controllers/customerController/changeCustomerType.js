// ===========================================================
// CHANGE USER TYPE FROM CUSTOMER TO OWNER
// ===========================================================
const { Customer, Owner, User } = require("../../models");
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
  // CUSTOMER FOUND, EXTRACT USER ID FROM CUSTOMER
  // ------------------------------------------------------------
  const userId = dbCustomer.user._id;
  // ------------------------------------------------------------
  // FIND USER IN THE DB
  // ------------------------------------------------------------
  const dbUser = await User.findById(userId);
  // ------------------------------------------------------------
  // IF USER NOT FOUND OR HAS BEEN TEMPORARILY DELETED, SEND ERROR
  // ------------------------------------------------------------
  if (!dbUser || dbUser.isDeleted) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
  }
  // ------------------------------------
  // CREATE NEW OWNER AND STORE ALL CUSTOMER PROPERTIES IN IT
  // ------------------------------------
  // LICENSE MUST BE SENT IN REQ OBJECT
  // ------------------------------------
  if (req.body.licenseNumber) {
    const dbOwner = new Owner({
      _id: dbCustomer._id,
      name: dbCustomer.name,
      address: dbCustomer.address,
      user: dbCustomer.user,
      email: dbCustomer.email,
      licenseNumber: req.body.licenseNumber
    });
    // ------------------------------------
    // SAVE OWNER, DELETE CUSTOMER AND SAVE UPDATED USER
    // ------------------------------------
    await dbOwner.save();
    // **********************************************
    // LATER DELETE RELATED PROPTIES WITH OWNER ALSO
    // **********************************************
    await dbCustomer.remove();
    dbUser.customer = null;
    dbUser.owner = dbCustomer._id;
    dbUser.userType = "owner";
    await dbUser.save();
    // ------------------------------------
    // REDIRECT TO THE OWNER PROFILE PAGE
    // ------------------------------------
    return res.redirect(`/api/owners/${dbOwner._id}`);
  }
  const error = new Error(
    "Bad Request, licenseNumber for owner must be specified"
  );
  error.status = 400;
  return next(error);

  // ------------------------------------------------------------
};
