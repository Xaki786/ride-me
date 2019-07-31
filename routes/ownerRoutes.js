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
// @route   => /api/owners/:ownerId
// @desc    => show specific owner, delete owner
// ---------------------------------------------------
router
  .route("/")
  .get(getOneOwner)
  .delete(deleteOneOwner);
// ==============================================================
module.exports = router;
