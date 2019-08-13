// ================================================================
// ADD SPECIFIC CAR TO THE GROUP BY OWNER
// ================================================================
const { Owner, Group, Car } = require("../../../models");
// ---------------------------------------------
// @route =>  /api/owners/:ownerId/groups/:groupId/cars/:carId
// ---------------------------------------------
module.exports = async (req, res, next) => {
  // -----------------------------------------------
  const { ownerId, groupId, carId } = req.params;
  // -----------------------------------------------
  // FIND OWNER IN THE DATABASE
  // -----------------------------------------------
  const dbOwner = await Owner.findById(ownerId);
  // -----------------------------------------------
  // IF OWNER NOT FOUND IN DB OR IT HAS BEEN TEMPORARILY DELETED, SEND AN ERROR
  // -----------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }
  // -----------------------------------------------
  // FIND CAR IN THE DATABASE
  // -----------------------------------------------
  const dbCar = await Car.findById(carId);
  // -----------------------------------------------
  // IF CAR IS NOT FOUND IN THE DB OR IT HAS BEEN TEMPORARILY DELETED, SEND AN ERROR
  // -----------------------------------------------
  if (!dbCar || dbCar.isDeleted) {
    const error = new Error("Car Not Found");
    error.status = 404;
    return next(error);
  }
  // -----------------------------------------------
  // VERIFY AUTHORIZATION OF A CAR BY OWNER, IF NOT THEN SEND AN ERROR
  // -----------------------------------------------
  const isValidCarOnwer = await dbCar.isValidOwner(dbOwner._id);
  if (!isValidCarOnwer) {
    const error = new Error("Invalid Car Owner");
    error.status = 400;
    return next(error);
  }
  // -----------------------------------------------
  // FIND GROUP IN THE DATABASE
  // -----------------------------------------------
  const dbGroup = await Group.findById(groupId);
  // -----------------------------------------------
  // IF GROUP NOT FOUND OR IT HAS BEEN TEMPORARILY DELETED, SEND AN ERROR
  // -----------------------------------------------
  if (!dbGroup || dbGroup.isDeleted) {
    const error = new Error("Group Not Found");
    error.status = 404;
    return next(error);
  }
  // -----------------------------------------------
  //   CHECK IF THIS GROUP ALREADY CONTAINS A CAR
  // -----------------------------------------------
  if (dbGroup.car) {
    const error = new Error(
      "Car is already present in the group, First delete previous car"
    );
    error.status = 400;
    return next(error);
  }
  // -----------------------------------------------
  // VERIFY AUTHORIZATION OF GROUP BY OWNER, IF NOT THEN SEND AN ERROR
  // -----------------------------------------------
  const isValidGroupOwner = await dbGroup.isValidOwner(dbOwner._id);
  if (!isValidGroupOwner) {
    const error = new Error("Invalid Group Owner");
    error.status = 400;
    return next(error);
  }
  // -----------------------------------------------
  // ADD CAR TO THE GROUP
  // -----------------------------------------------
  dbGroup.car = dbCar._id;
  // -----------------------------------------------
  // ADD GROUP TO THE CAR
  // -----------------------------------------------
  dbCar.groups.push(dbGroup._id);
  // -----------------------------------------------
  // SAVE THE CAR
  // -----------------------------------------------
  await dbCar.save();
  // -----------------------------------------------
  // SAVE THE GROUP
  // -----------------------------------------------
  await dbGroup.save();
  // -----------------------------------------------
  // REDIRECT TO THE GROUP PAGE
  // -----------------------------------------------
  return res.redirect(`/api/owners/${ownerId}/groups/${groupId}`);
  // -----------------------------------------------
};
// ================================================================
