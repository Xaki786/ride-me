const router = require("express-promise-router")();
const passport = require("../passport");
const {
  getUsers,
  createUser,
  login,
  getOwnerCars,
  createOwnerCar,
  getOneUser
} = require("../controllers").userController;
// ====================================================================
// route => '/api/users/'
// ====================================================================
router
  .route("/")
  .get(getUsers)
  .post(createUser);

// ====================================================================
// route => '/api/users/:userId'
// ====================================================================
router.route("/:userId").get(getOneUser);
// ====================================================================
// route => '/api/users/:userId/owner/:ownerid/cars'
// ====================================================================
router
  .route("/:userId/owner/:ownerId/cars")
  .get(getOwnerCars)
  .post(createOwnerCar);

// ====================================================================
// route => '/api/users/:login'
// ====================================================================
router
  .route("/login")
  .post(passport.authenticate("local", { session: false }), login);

module.exports = router;
// ====================================================================
