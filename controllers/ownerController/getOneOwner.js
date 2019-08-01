// ====================================================================
// SHOW PROFILE OF THE OWNER
// ====================================================================
// @route   =>  /api/users/:userId/owner/:ownerId/
// @method  =>  GET
// ----------------------------------------------------
const { User, Owner } = require("../../models");
module.exports = async (req, res, next) => {
  // FIND USER IN THE DATABASE
  const dbUser = await User.findById(req.params.userId);

  // FETCH THE OWNER AND ITS RESPECTIVE CARS DATA FROM DATABASE
  const dbOwner = await Owner.findById(req.params.ownerId).populate("cars");

  // IF OWNER IS NOT PRESENT IN THE DATABASE OR HAS BEEN TEMPORARILY DELETED, SEND THE ERROR
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }

  // OWNER IS PRESENT, NOW SEND IT'S INFORMATION TO THE USER
  return res.status(200).json({
    user: dbOwner
  });
};
