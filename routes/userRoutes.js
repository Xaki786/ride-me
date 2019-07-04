const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING USER CONTROLLER METHODS
// ==============================================================
const { createUser, getOneUser } = require("../controllers").userController;
// ====================================================================
// @route   => '/api/users/'
// @desc    => Create new user
router.route("/").post(createUser);

// ====================================================================
// @route   => /api/users/:userId
// @desc    => Show specific user
router.route("/:userId").get(getOneUser);
// ====================================================================
module.exports = router;
