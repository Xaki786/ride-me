const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING ADMIN CONTROLLER METHODS
// ==============================================================
const {
  getOwners,
  getCustomers,
  getUsers,
  getCars,
  getBookings
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
// ---------------------------------------------------
// @route   => /api/admin/cars
// @desc    => get all cars
// ---------------------------------------------------
router.route("/cars").get(getCars);
// ---------------------------------------------------
// @route   => /api/admin/bookings
// @desc    => get all bookings
// ---------------------------------------------------
router.route("/bookings").get(getBookings);
// ==============================================================
module.exports = router;
