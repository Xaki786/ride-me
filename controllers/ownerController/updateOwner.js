// ===========================================================
// UPDATE OWNER PROFILE
// ===========================================================
const { Owner, User } = require("../../models");
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
  //   UPDATE OWNER'S PROFILE
  // ------------------------------------------------------------
  const updatedOwner = await Owner.findByIdAndUpdate(ownerId, req.body, {
    new: true
  });
  // ------------------------------------------------------------
  //   REDIRECT TO THE OWNER'S PROFILE
  // ------------------------------------------------------------
  return res.redirect(`/api/owners/${updatedOwner._id}`);
  // ------------------------------------------------------------
};
