const { Car } = require("../../models");
// ====================================================================
// GET ALL CARS FROM DATABASE
// ====================================================================
// @route   =>  /api/admin/cars
// @method  =>  GET
// ----------------------------------------------------
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  //  FIND ALL CARS IN THE DATABASE
  // ----------------------------------------------------
  const dbCars = await Car.find();
  // ----------------------------------------------------
  //  IF NO OWNERS ARE THERE, THEN SEND USER 404 RESPONSE
  // ----------------------------------------------------
  if (!dbCars.length > 0) {
    const error = new Error("No Cars found");
    error.status = 404;
    return next(error);
  }
  // ----------------------------------------------------
  //  OWNERS FOUND, SEND USER THIS DATA
  // ----------------------------------------------------
  return res.status(200).json({
    cars: dbCars
  });
};
