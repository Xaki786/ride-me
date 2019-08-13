// ====================================================================
// DELETE CAR FOR THE OWNER
// ====================================================================
// @route   =>  /api/owners/:ownerId/cars/:carId
// @method  =>  DELETE
// ====================================================================
const { Car, Owner } = require("../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // FIND A CAR USING CAR ID PASSED IN THE PARAMS
  // ---------------------------------------------------
  const { carId } = req.params;
  const dbCar = await Car.findById(carId);
  // ---------------------------------------------------
  // IF CAR NOT FOUND, SEND AN ERROR TO THE USER
  // ---------------------------------------------------
  if (!dbCar || dbCar.isDeleted) {
    const error = new Error("Car not Found");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------
  // FIND OWNER OF THE CAR USING OWNER ID PRESENT IN THE CAR'S DOCUMENT
  // ---------------------------------------------------
  const { owner } = dbCar;
  const dbOwner = await Owner.findById(owner);
  // ---------------------------------------------------
  // IF OWNER NOT FOUND, SEND AN ERROR TO THE USER
  // ---------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Invalid owner of the car");
    error.status = 400;
    return next(error);
  }
  // ENABLE CAR PROPERTY IS DELETED TO BE TRUE
  // ---------------------------------------------------
  dbCar.isDeleted = true;
  await dbCar.save();
  // ---------------------------------------------------
  // SEND RESPONSE TO THE USER
  // ---------------------------------------------------
  return res.status(200).json({
    message: "Car deleted successfully"
  });
  // ---------------------------------------------------
};
