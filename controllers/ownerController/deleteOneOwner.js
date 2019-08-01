// ====================================================================
// DELETE OWNER OF THE CAR
// ====================================================================
const { User, Owner } = require("../../models");
// ====================================================================
// @ROUTE   =>  /api/owners/:ownerId/
// @METHOD  =>  DELETE
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  // FIND OWNER FROM ID
  // ----------------------------------------------------
  const { ownerId } = req.params;
  const dbOwner = await Owner.findById(ownerId);
  // ----------------------------------------------------
  // IF OWNER NOT FOUND, SEND USER AN ERROR
  // ----------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Invalid Owner");
    error.status = 400;
    return next(error);
  }
  // ----------------------------------------------------
  // OWNER FOUND, NOW DELETE CHANGE IT'S isDeleted FLAG TO TRUE AND SAVE
  // ----------------------------------------------------
  dbOwner.isDeleted = true;
  await dbOwner.save();
  // ----------------------------------------------------
  // SEND USER SUCCESS RESPONSE
  // ----------------------------------------------------
  return res.status(200).json({
    message: "Owner Successfully deleted"
  });
  // ----------------------------------------------------
};
