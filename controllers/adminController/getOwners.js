const { Owner } = require("../../models");
// ====================================================================
// GET ALL OWNERS FROM DATABASE
// ====================================================================
// @route   =>  /api/owners/
// @method  =>  GET
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  //  FIND ALL OWNERS IN THE DATABASE
  // ----------------------------------------------------
  const dbOwners = await Owner.find();
  // ----------------------------------------------------
  //  IF NO OWNERS ARE THERE, THEN SEND USER 404 RESPONSE
  // ----------------------------------------------------
  if (!dbOwners.length > 0) {
    const error = new Error("No owners found");
    error.status = 404;
    return next(error);
  }
  // ----------------------------------------------------
  //  OWNERS FOUND, SEND USER THIS DATA
  // ----------------------------------------------------
  return res.status(200).json({
    owners: dbOwners
  });
};
