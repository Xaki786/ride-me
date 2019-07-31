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
// ROUTE   => /api/owners/:ownerId/cars
// DESC    => SHOW ALL CARS OF THE OWNER, ADD NEW CAR
router
  .route("/")
  .get(getCars)
  .post(createCar);

// ====================================================================
// ROUTE   => /api/users/:userId/owner/:ownerId/cars/:carId
// DESC   => GET DATA OF A SINGLE CAR, UPDATE SINGLE CAR AND DELETE CAR
router
  .route("/:carId")
  .get(getOneCar)
  .put(updateCar)
  .delete(deleteCar);
// ====================================================================
module.exports = router;
