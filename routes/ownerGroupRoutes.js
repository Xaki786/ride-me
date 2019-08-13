const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING GROUP CONTROLLER METHODS
// ==============================================================
const {
  createGroup,
  deleteGroup,
  getAllGroups,
  getGroups,
  getOneGroup,
  addCar
} = require("../controllers").ownerGroupController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/owners/:ownerId/groups
// @desc    => ADD NEW GROUP
// ---------------------------------------------------
router
  .route("/")
  .get(getGroups)
  .post(createGroup);
router.route("/all").get(getAllGroups);
// ---------------------------------------------------
// @route   => /api/owners/:ownerId/groups/:groupId
// @desc    => VIEW SPECIFIC GROUP => DELETE SPECIFIC GROUP
// ---------------------------------------------------
router
  .route("/:groupId")
  .get(getOneGroup)
  .delete(deleteGroup);
// ---------------------------------------------------
// @route   => /api/owners/:ownerId/groups/:groupId/cars/:carId
// @desc    => ADD NEW CAR TO THE GROUP
// ---------------------------------------------------
router.route("/:groupId/cars/:carId").post(addCar);
// ==============================================================
module.exports = router;
