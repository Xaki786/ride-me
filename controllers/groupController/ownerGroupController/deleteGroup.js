// ---------------------------------------------------
const { Group, Owner } = require("../../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND OWNER FROM ID
  // ---------------------------------------------------
  const { ownerId, groupId } = req.params;
  const dbOwner = await Owner.findById(ownerId);
  // ---------------------------------------------------
  // SEND ERROR RESPONSE IF OWNER NOT FOUND
  // ---------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Invalid owner");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  // OWNER IS PRESENT NOW FIND THE GROUP
  // ---------------------------------------------------
  const dbGroup = await Group.findById(groupId);
  // ---------------------------------------------------
  //   IF GROUP IS NOT PRESENT OR HAS BEEN TEMPORARILY DELETED, SEND AN ERROR
  // ---------------------------------------------------
  if (!dbGroup || dbGroup.isDeleted) {
    const error = new Error("Group Not Found");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------
  // CHECK IF THIS IS THE VALID OWNER OF THE GROUP
  // ---------------------------------------------------
  const isValidOwner = await dbGroup.isValidOwner(dbOwner._id);
  if (!isValidOwner) {
    const error = new Error("This owner didn't create this group");
    error.status = 400;
    return next(error);
  }
  // ---------------------------------------------------
  // CHANGE GROUP FLAG isDeleted TO TRUE AND SAVE
  // ---------------------------------------------------
  dbGroup.isDeleted = true;
  await dbGroup.save();
  // ---------------------------------------------------
  // SEND OWNER SUCCESS RESPONSE
  // ---------------------------------------------------
  return res.status(200).json({
    message: "Successfully deleted the group"
  });
  // ---------------------------------------------------
};
// ---------------------------------------------------
