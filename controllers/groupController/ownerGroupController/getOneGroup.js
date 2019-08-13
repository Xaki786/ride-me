const { Group, Owner } = require("../../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND OWNER FROM ID
  // ---------------------------------------------------
  const { ownerId, groupId } = req.params;
  const dbOwner = await Owner.findById(ownerId);
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF OWNER NOT FOUND OR TEMPORARILY DELETED
  // ---------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Invalid Owner");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  // OWNER FOUND, NOW FETCH GROUP DETAILS
  // ---------------------------------------------------
  const dbGroup = await Group.findById(groupId)
    .populate({
      path: "owner",
      select: "name"
    })
    .populate("customers", "name");
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF GROUP NOT FOUND OR TEMPORARILY DELETED
  // ---------------------------------------------------
  if (!dbGroup || dbGroup.isDeleted) {
    const error = new Error("Invalid Group");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  // SEND GROUP AS A RESPONSE TO THE CUSTOMER
  // ---------------------------------------------------
  return res.status(200).json({
    Group: dbGroup
  });
  // ---------------------------------------------------
};
// ---------------------------------------------------
