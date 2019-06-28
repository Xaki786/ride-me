const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING CAR CONTROLLER METHODS
// ==============================================================
const {
  getCars,
  createCar,
  updateCar,
  deleteCar,
  getOneCar
} = require("../controllers").carController;
// ====================================================================
// @route   => /api/users/:userId/owner/:ownerId/cars
// @desc    => show all cars of the owner, Add New Car
router
  .route("/")
  .get(getCars)
  .post(createCar);

// ====================================================================
// @route   => /api/users/:userId/owner/:ownerId/cars/:carId
// @desc    => show all cars of the owner, Add New Car
router
  .route("/:carId")
  .get(getOneCar)
  .put(updateCar)
  .delete(deleteCar);
// ====================================================================
module.exports = router;
