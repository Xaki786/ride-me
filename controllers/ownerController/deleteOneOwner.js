// ====================================================================
// DELETE OWNER OF THE CAR
// ====================================================================
const { User, Owner } = require("../../models");
// ====================================================================
// @ROUTE   =>  /api/users/:userId/owner/:ownerId/
// @METHOD  =>  DELETE
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  // FIND OWNER FROM ID
  // ----------------------------------------------------
  const { userId, ownerId } = req.params;
  const dbOwner = await Owner.findById(ownerId);
  // ----------------------------------------------------
  // IF OWNER NOT FOUND, SEND USER AN ERROR
  // ----------------------------------------------------
  if (!dbOwner) {
    const error = new Error("Invalid Owner");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------
  // CHECK IF USER PRESENT IN OWNER'S DOCUMENT IS SAME AS PROVIDED IN THE PARAMS
  // ----------------------------------------------------
  const isValidUser = await dbOwner.isValidUser(userId);
  if (!isValidUser) {
    const error = new Error("Invalid User");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------
  // OWNER FOUND AND USER IN THE PARAMS AND DOCUMENT ARE THE SAME, NOW SEARCH FOR THE DB USER
  // ----------------------------------------------------
  const dbUser = await User.findById(userId);
  // ----------------------------------------------------
  // IF DB USER NOT FOUND, SEND USER AN ERROR
  // ----------------------------------------------------
  if (!dbUser) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  // ----------------------------------------------------
  // USER FOUND, NOW DELETE IT'S OWNER ENTRY AND SAVE THE DB USER
  // ----------------------------------------------------
  dbUser.owner = null;
  await dbUser.save();
  // ----------------------------------------------------
  // DELETE THE OWNER
  // ----------------------------------------------------
  await Owner.findByIdAndDelete(ownerId);
  // ----------------------------------------------------
  // REDIRECT USER TO THE GET USERS API
  // ----------------------------------------------------
  return res.redirect("/api/admin/users");
  // ----------------------------------------------------
};
