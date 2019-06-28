const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING USER CONTROLLER METHODS
// ==============================================================
const {
  getUsers,
  createUser,
  getOneUser
} = require("../controllers").userController;
// ====================================================================
// @route   => '/api/users/'
// @desc    => Get all users, Create new user
router
  .route("/")
  .get(getUsers)
  .post(createUser);

// ====================================================================
// @route   => /api/users/:userId
// @desc    => Show specific user
router.route("/:userId").get(getOneUser);
// ====================================================================
module.exports = router;
