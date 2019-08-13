const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING CUSTOMER CONTROLLER METHODS
// ==============================================================
const {
  getOneCustomer,
  changeCustomerType,
  deleteOneCustomer,
  updateCustomer,
  getBookedCars
} = require("../controllers").customerController;
// ==============================================================
// ---------------------------------------------------
// @route   => api/customers/:customerId
// @desc    => show specific customer, delete specific customer
// ---------------------------------------------------
router
  .route("/")
  .get(getOneCustomer)
  .put(updateCustomer)
  .delete(deleteOneCustomer);
// ---------------------------------------------------
// @route   => api/customers/:customerId/change-type
// @desc    => CHANGE CUSTOMER TYPE TO OWNER
// ---------------------------------------------------
router.route("/change-type").put(changeCustomerType);
// ==============================================================
router.route("/:customerId/cars").get(getBookedCars);
// ==============================================================
module.exports = router;
