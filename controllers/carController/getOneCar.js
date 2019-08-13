// ====================================================================
// SHOW SINGLE CAR
// ====================================================================
// @route   =>  /api/owners/:ownerId/cars/:carId
// @method  =>  GET
// ====================================================================
const { Car } = require("../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------------
  // FIND CAR => FIND LAST BOOKING => FETCH LIST OF RIDERS FROM THAT BOOKING
  // ---------------------------------------------------------
  const dbCar = await Car.findById(req.params.carId)
    .populate({
      path: "bookings",
      populate: {
        path: "customers",
        select: "name"
      }
    })
    .populate({
      path: "owner",
      select: "name"
    });
  // ---------------------------------------------------------
  // IF CAR NOT FOUND, SEND USER AN ERROR OR CAR HAS BEEN DELETED TEMPORARILY
  // ---------------------------------------------------------
  if (!dbCar || dbCar.isDeleted) {
    const error = new Error("Car Not Found");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------------
  // CAR FOUND, NOW SEND USER CAR'S DATA, LAST BOOKING ID, AND LIST OF RIDERS FROM THAT BOOKING
  // ---------------------------------------------------------
  return res.status(200).json({
    Car: dbCar
  });
  // ---------------------------------------------------------
};
