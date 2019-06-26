const router = require("express-promise-router")();
const passport = require("../passport");
const {
  getUsers,
  createUser,
  login,
  getOwnerCars,
  createOwnerCar,
  getOneUser,
  getOneOwner
} = require("../controllers").userController;
// ====================================================================
// @route   => '/api/users/'
// @desc    => Get all users, Create new user
router
  .route("/")
  .get(getUsers)
  .post(createUser);

// ====================================================================
// @route   => /api/users/login
// @desc    => Login User using passport local strategy
router
  .route("/login")
  .post(passport.authenticate("local", { session: false }), login);
// ====================================================================
// @route   => /api/users/:userId
// @desc    => Show specific user
router.route("/:userId").get(getOneUser);

// ====================================================================
// @route   => /api/users/:userId/owner/:ownerId
// @desc    => show specific owner
router.route("/:userId/owner/:ownerId").get(getOneOwner);

// ====================================================================
// @route   => /api/users/:userId/owner/:ownerid/cars
// @desc    => show all cars of the owner, Add New Car
router
  .route("/:userId/owner/:ownerId/cars")
  .get(getOwnerCars)
  .post(createOwnerCar);

// ====================================================================
module.exports = router;
