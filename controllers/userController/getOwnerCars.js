const { User, Owner, Car } = require("../../models");
module.exports = async (req, res, next) => {
  // FIND USER
  const dbUser = await User.findById(req.params.userId);
  if (!dbUser) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  // FIND OWNER AND POUPULATE CARS
  const dbOwner = await Owner.findById(req.params.ownerId).populate("cars");

  // if no user found send user an error response
  if (!dbOwner) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }

  // RETURN CARS
  if (dbOwner.cars.length > 0) {
    res.status(200).json({
      cars: dbOwner.cars
    });
  }
  const error = new Error("No Cars Found");
  error.status = 404;
  return next(error);
};
