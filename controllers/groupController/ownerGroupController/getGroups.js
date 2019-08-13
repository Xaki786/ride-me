const { Group, Owner } = require("../../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND CUSTOMER FROM ID
  // ---------------------------------------------------
  const { ownerId } = req.params;
  const dbOwner = await Owner.findById(ownerId).populate("groups");
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF OWNER NOT FOUND OR TEMPORARILY DELETED
  // ---------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Invalid Owner");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  //   FILTER ALL GROUPS WHICH ARE NOT DELETED TEMPORARILY
  // ---------------------------------------------------
  const Groups = dbOwner.groups.filter(group => group.isDeleted !== true);
  // ---------------------------------------------------
  // SEND LIST OF GROUPS JSON AS RESPONSE
  // ---------------------------------------------------
  if (Groups.length > 0) {
    return res.status(201).json(Groups);
  }
  return res.status(201).json({
    message: "This Owner did not create any group"
  });
  // ---------------------------------------------------
};
// ---------------------------------------------------
