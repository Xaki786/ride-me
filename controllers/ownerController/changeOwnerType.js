// ===========================================================
// CHANGE USER TYPE FROM OWNER TO CUSTOMER
// ===========================================================
const { Customer, Owner, User } = require("../../models");
// ===========================================================
module.exports = async (req, res, next) => {
  // ------------------------------------------------------------
  const { ownerId } = req.params;
  // ------------------------------------------------------------
  // FIND OWNER IN DB
  // ------------------------------------------------------------
  const dbOwner = await Owner.findById(ownerId);
  // ------------------------------------------------------------
  // IF OWNER NOT FOUND OR HAS BEEN TEMPORARILY DELETED, SEND ERROR
  // ------------------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Owner not found");
    error.status = 404;
    return next(error);
  }
  // ------------------------------------------------------------
  // OWNER FOUND, EXTRACT USER ID FROM OWNER
  // ------------------------------------------------------------
  const userId = dbOwner.user._id;
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
  // CREATE NEW CUSTOMER AND STORE ALL OWNER PROPERTIES IN IT
  // ------------------------------------
  const dbCustomer = new Customer({
    _id: dbOwner._id,
    name: dbOwner.name,
    address: dbOwner.address,
    user: dbOwner.user,
    email: dbOwner.email
  });
  // ------------------------------------
  // SAVE CUSTOMER, DELETE ONWER AND SAVE UPDATED USER
  // ------------------------------------
  await dbCustomer.save();
  // **********************************************
  // LATER DELETE RELATED PROPTIES WITH OWNER ALSO
  // **********************************************
  await dbOwner.remove();
  dbUser.owner = null;
  dbUser.customer = dbCustomer._id;
  dbUser.userType = "customer";
  await dbUser.save();
  // ------------------------------------
  // REDIRECT TO THE CUSTOMER PROFILE PAGE
  // ------------------------------------
  return res.redirect(`/api/customers/${dbCustomer._id}`);

  // ------------------------------------------------------------
};
