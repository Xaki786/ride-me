// ====================================================================
// UPDATE CAR FOR THE OWNER
// ====================================================================
// @route   =>  /api/owners/:ownerId/cars/:carId
// @method  =>  PUT
// ====================================================================
const { Car, Owner } = require("../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------
  // CAR NUMBER IS EXCLUDED, AS IT WOULD BE DISABLED FROM THE FRONTEND
  // ---------------------------------------------------
  const newCar = req.body;
  // ---------------------------------------------------
  // FIND A CAR USING CAR ID PASSED IN THE PARAMS
  // ---------------------------------------------------
  const { carId, ownerId } = req.params;
  const dbCar = await Car.findById(carId);
  // ---------------------------------------------------
  // IF CAR NOT FOUND OR HAS BEEN TEMPORARILY DELETED, SEND AN ERROR TO THE USER
  // ---------------------------------------------------
  if (!dbCar || dbCar.isDeleted) {
    const error = new Error("Car not Found");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------
  // CAR FOUND, NOW CHECK THE OWNER
  // ---------------------------------------------------
  const dbOwner = await Owner.findById(ownerId);
  // ---------------------------------------------------
  // IF OWNER NOT FOUND, SEND AN ERROR TO THE USER
  // ---------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------
  // CHECK THAT WHETHER THIS IS THE VALID OWNER OF THE CAR
  // ---------------------------------------------------
  const isValidOwner = await dbCar.isValidOwner(dbOwner._id);
  if (!isValidOwner) {
    const error = new Error("Invalid owner of the car");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------
  // UPDATE THE CAR
  // ---------------------------------------------------
  const updatedCar = await Car.findByIdAndUpdate(carId, newCar, {
    new: true
  });

  return res.status(200).json({
    car: updatedCar
  });
};
