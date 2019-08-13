const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING GROUP CONTROLLER METHODS
// ==============================================================
const {
  getAllGroups,
  getOneGroup,
  addCustomer,
  getGroups,
  removeCustomer
} = require("../controllers").customerGroupController;
// ==============================================================
// ---------------------------------------------------
router.route("/").get(getGroups);
// ---------------------------------------------------
// @route   => /api/customers/:customerId/groups/
// @desc    => SHOW ALL GROUPS OF WHICH CUSTOMER IS A GROUP MEMBER
// ---------------------------------------------------
// @route   => /api/customers/:customerId/groups/all
// @desc    => SHOW ALL GROUPS
// ---------------------------------------------------
router.route("/all").get(getAllGroups);
// ---------------------------------------------------
// @route   => /api/customers/:customerId/groups/:groupId
// @desc    => SHOW ONE GROUP => ADD CUSTOMER TO THE GROUP => REMOVE CUSTOMER FROM THE GROUP
// ---------------------------------------------------
router
  .route("/:groupId")
  .get(getOneGroup)
  .put(addCustomer)
  .delete(removeCustomer);
// ==============================================================
module.exports = router;
