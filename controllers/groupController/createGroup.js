const { Group, Owner } = require("../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND OWNER FROM ID
  // ---------------------------------------------------
  const { ownerId } = req.params;
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
  // OWNER FOUND, NOW CREATE NEW GROUP
  // ---------------------------------------------------
  const dbGroup = new Group({});
  // ---------------------------------------------------
  // ADD THIS GROUP TO THE OWNER'S GROUP ARRAY
  // ---------------------------------------------------
  dbGroup.owner = dbOwner;
  // ---------------------------------------------------
  // ADD OWNER IN THE GROUP
  // ---------------------------------------------------
  dbOwner.groups.push(dbGroup._id);
  // ---------------------------------------------------
  // SAVE GROUP
  // ---------------------------------------------------
  await dbGroup.save();
  // ---------------------------------------------------
  // SAVE OWNER
  // ---------------------------------------------------
  await dbOwner.save();
  // ---------------------------------------------------
  // SEND GROUP JSON AS RESPONSE
  // ---------------------------------------------------
  return res.status(201).json(dbGroup);
  // ---------------------------------------------------
};
// ---------------------------------------------------
