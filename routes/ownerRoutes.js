const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING OWNER CONTROLLER METHODS
// ==============================================================
const {
  getOneOwner,
  deleteOneOwner
} = require("../controllers").ownerController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/users/:userId/owner/:ownerId
// @desc    => show specific owner, delete owner
// ---------------------------------------------------
router
  .route("/:ownerId")
  .get(getOneOwner)
  .delete(deleteOneOwner);
// ==============================================================
module.exports = router;
