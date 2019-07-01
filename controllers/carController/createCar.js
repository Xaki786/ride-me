// ====================================================================
// CREATE NEW CAR FOR THE OWNER
// ====================================================================
// @route   =>  /api/users/:userId/owner/:ownerId/cars
// @method  =>  POST
// ====================================================================
const { Owner, Car } = require("../../models");
module.exports = async (req, res, next) => {
  // ---------------------------------------------------------
  // ACCEPT THESE VALUES FROM REQUEST
  // ---------------------------------------------------------
  const {
    carNumber,
    insuranceNumber,
    insuranceAmount,
    propertyTax,
    tyreCost,
    serviceCost,
    lastReading
  } = req.body;
  // ---------------------------------------------------------
  // CREATE DB INSTANCE OF THE CAR
  // ---------------------------------------------------------
  const dbCar = new Car({
    carNumber,
    insuranceNumber,
    insuranceAmount,
    propertyTax,
    tyreCost,
    serviceCost,
    lastReading
  });
  // ---------------------------------------------------------
  // FIND OWNER OF THE CAR IN THE DATABASE FROM ID PROVIDED IN THE PARAMS
  // ---------------------------------------------------------
  const dbOwner = await Owner.findById(req.params.ownerId);

  // ---------------------------------------------------------
  // IF NO OWNER FOUND, SEND USER AN ERROR
  // ---------------------------------------------------------
  if (!dbOwner) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }
  // ---------------------------------------------------------
  // STORE OWNER'S ID IN THE CAR
  // ---------------------------------------------------------
  dbCar.owner = dbOwner.id;
  // ---------------------------------------------------------
  // STORE CAR'S ID IN THE OWNER'S CAR ARRAY
  // ---------------------------------------------------------
  dbOwner.cars.push(dbCar.id);

  // ---------------------------------------------------------
  // SAVE THE OWNER IN THE DATABASE
  // ---------------------------------------------------------
  await dbOwner.save();
  // ---------------------------------------------------------
  // SAVE THE CAR IN THE DATABASE
  // ---------------------------------------------------------
  await dbCar.save();
  // ---------------------------------------------------------
  // RETURN THE CAR
  // ---------------------------------------------------------
  return res.status(200).json({
    car: dbCar
  });
};
