const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING CUSTOMER CONTROLLER METHODS
// ==============================================================
const {
  getOneCustomer,
  deleteOneCustomer,
  getBookedCars
} = require("../controllers").customerController;
// ==============================================================
// ---------------------------------------------------
// @route   => /customers/:customerId
// @desc    => show specific customer, delete specific customer
// ---------------------------------------------------
router
  .route("/")
  .get(getOneCustomer)
  .delete(deleteOneCustomer);
// ==============================================================
router.route("/:customerId/cars").get(getBookedCars);
// ==============================================================
module.exports = router;
