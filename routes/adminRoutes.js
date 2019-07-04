const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING ADMIN CONTROLLER METHODS
// ==============================================================
const {
  getOwners,
  getCustomers,
  getUsers
} = require("../controllers").adminController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/admin/users
// @desc    => get all users
// ---------------------------------------------------
router.route("/owners").get(getOwners);
// ---------------------------------------------------
// @route   => /api/admin/customers
// @desc    => get all customers
// ---------------------------------------------------
router.route("/customers").get(getCustomers);
// ---------------------------------------------------
// @route   => /api/admin/users
// @desc    => get all users
// ---------------------------------------------------
router.route("/users").get(getUsers);
// ==============================================================
module.exports = router;
