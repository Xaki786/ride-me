const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING OWNER CONTROLLER METHODS
// ==============================================================
const {
  getOneOwner,
  deleteOneOwner,
  updateOwner,
  changeOwnerType
} = require("../controllers").ownerController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/owners/:ownerId
// @desc    => show specific owner,update owner, delete owner
// ---------------------------------------------------
router
  .route("/")
  .get(getOneOwner)
  .put(updateOwner)
  .delete(deleteOneOwner);
// ---------------------------------------------------
// @route   => /api/owners/:ownerId/change-type
// @desc    => UPDATE OWNER AND USER TO CHANGE IT'S TYPE FROM OWNER TO CUSTOMER
// ---------------------------------------------------
router.route("/change-type").put(changeOwnerType);
// ---------------------------------------------------
// ==============================================================
module.exports = router;
