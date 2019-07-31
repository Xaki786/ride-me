const { User } = require("../../models");
// ====================================================================
// GET ALL USERS FROM DATABASE
// ====================================================================
// @route   =>  /api/admin/users/
// @method  =>  GET
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  //  FIND ALL CUSTOMERS IN THE DATABASE
  // ----------------------------------------------------
  const dbUsers = await User.find();

  // ----------------------------------------------------
  //  IF NO USERS FOUND, THEN SEND USER 404 RESPONSE
  // ----------------------------------------------------
  if (!dbUsers.length > 0) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }

  // ----------------------------------------------------
  //  USERS FOUND, SEND USER THIS DATA
  // ----------------------------------------------------
  return res.status(200).json({
    users: dbUsers
  });
};
