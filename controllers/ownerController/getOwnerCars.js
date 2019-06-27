// ====================================================================
// SHOW ALL CARS OWNED BY THE OWNER
// ====================================================================
// @route   =>  /api/users/:userId/owner/:ownerId/cars
// @method  =>  GET
// ====================================================================
const { User, Owner, Car } = require("../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------------
  // FIND USER IN THE DATABASE
  // ---------------------------------------------------------
  const dbUser = await User.findById(req.params.userId);

  // ---------------------------------------------------------
  // IF USER NOT FOUND, THEN SEND ERROR TO THE USER
  // ---------------------------------------------------------
  if (!dbUser) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------------
  // USER FOUND, NOW FIND OWNER AND POUPULATE CARS
  // ---------------------------------------------------------
  const dbOwner = await Owner.findById(req.params.ownerId).populate("cars");

  // ---------------------------------------------------------
  // IF NO OWNER FOUND, SEND ERROR TO THE USER
  // ---------------------------------------------------------
  if (!dbOwner) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }

  // ---------------------------------------------------------
  // OWNER FOUND, NOW RETURN CARS OF THE USER IF CARS ARE PRESENT
  // ---------------------------------------------------------
  if (dbOwner.cars.length > 0) {
    return res.status(200).json({
      cars: dbOwner.cars
    });
  }

  // ---------------------------------------------------------
  // NO CARS OWNED BY THE OWNER
  // ---------------------------------------------------------
  const error = new Error("No Cars Found");
  error.status = 404;
  return next(error);
};
