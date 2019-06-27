// ====================================================================
// UPDATE CAR FOR THE OWNER
// ====================================================================
// @route   =>  /api/users/:userId/owner/:ownerId/cars/:carId
// @method  =>  PUT
// ====================================================================
const { Car } = require("../../models");
module.exports = async (req, res, next) => {
  // ACCEPT THESE VALUES FROM REQUEST AND CREATE A NEW CAR OBJECT
  // CAR NUMBER IS EXCLUDED, AS IT WOULD BE DISABLED FROM THE FRONTEND
  // ---------------------------------------------------------
  const {
    insuranceAmount,
    propertyTax,
    tyreCost,
    emissionCost,
    serviceCost,
    milage
  } = req.body;
  const newCar = {
    insuranceAmount,
    propertyTax,
    tyreCost,
    emissionCost,
    serviceCost,
    milage
  };
  // ---------------------------------------------------------
  // FIND DB IN THE CAR AND UPDATE IT
  // ---------------------------------------------------------
  const updatedCar = await Car.findByIdAndUpdate(req.params.carId, newCar, {
    new: true
  });

  return res.status(200).json({
    car: updatedCar
  });
};
