const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING OWNER CONTROLLER METHODS
// ==============================================================
const { getOneOwner } = require("../controllers").ownerController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/users/:userId/owner/:ownerId
// @desc    => show specific owner
// ---------------------------------------------------
router.route("/:ownerId").get(getOneOwner);
// ==============================================================
module.exports = router;
