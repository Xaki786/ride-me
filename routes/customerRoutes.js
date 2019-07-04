const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING CUSTOMER CONTROLLER METHODS
// ==============================================================
const {
  getOneCustomer,
  deleteOneCustomer
} = require("../controllers").customerController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/users/:userId/customer/:customerId
// @desc    => show specific customer, delete specific customer
// ---------------------------------------------------
router
  .route("/:customerId")
  .get(getOneCustomer)
  .delete(deleteOneCustomer);
// ==============================================================
module.exports = router;
