// ====================================================================
// SHOW ALL CARS OWNED BY THE OWNER
// ====================================================================
// @route   =>  /api/owners/:ownerId/cars
// @method  =>  GET
// ====================================================================
const { Owner } = require("../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------------
  // FIND OWNER AND POUPULATE CARS
  // ---------------------------------------------------------
  const dbOwner = await Owner.findById(req.params.ownerId).populate("cars");

  // ---------------------------------------------------------
  // IF NO OWNER FOUND, SEND ERROR TO THE USER
  // ---------------------------------------------------------
  if (!dbOwner || dbOwner.isDeleted) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }

  // ---------------------------------------------------------
  //  ELIMINATE ALL THOSE CARS WHICH HAVE BEEN TEMPORARILY DELETED
  // ---------------------------------------------------------
  const Cars = dbOwner.cars.filter(car => car.isDeleted !== true);
  if (Cars.length > 0) {
    return res.status(200).json({
      Cars
    });
  }
  // ---------------------------------------------------------
  // NO CARS OWNED BY THE OWNER
  // ---------------------------------------------------------
  const error = new Error("No Cars Found");
  error.status = 404;
  return next(error);
};
