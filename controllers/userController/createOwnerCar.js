const { Owner, Car } = require("../../models");
module.exports = async (req, res, next) => {
  // create car
  const {
    carNumber,
    insuranceNumber,
    insuranceAmount,
    propertyTax,
    tyreCost,
    serviceCost,
    lastReading
  } = req.body;
  const dbCar = new Car({
    carNumber,
    insuranceNumber,
    insuranceAmount,
    propertyTax,
    tyreCost,
    serviceCost,
    lastReading
  });
  // find owner
  const dbOwner = await Owner.findById(req.params.ownerId);

  // If user not found send user error response
  if (!dbUser) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  // store owner in the car
  dbCar.owner = dbOwner.id;
  // store car in the owner
  dbOwner.cars.push(dbCar.id);

  // save the owner
  await dbOwner.save();
  // save the car
  await dbCar.save();
  // return the car
  return res.status(200).json({
    car: dbCar
  });
};
