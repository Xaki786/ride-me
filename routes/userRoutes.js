const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING USER CONTROLLER METHODS
// ==============================================================
const { createUser, getOneUser,updateUser } = require("../controllers").userController;
// ====================================================================
// @route   => '/api/users/'
// @desc    => Create new user
router.route("/register").post(createUser);

// ====================================================================
// @route   => /api/users/:userId
// @desc    => Show specific user
router.route("/:userId").get(getOneUser);
router.route("/:userId").put(updateUser);
// ====================================================================
module.exports = router;

Latest commit
43a0cd4
now
Type 	Name 	Latest commit message 	Commit time
	..
