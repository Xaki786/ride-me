const router = require("express-promise-router")({ mergeParams: true });
// ==============================================================
// IMPORTING CUSTOMER CONTROLLER METHODS
// ==============================================================
const { createGroup } = require("../controllers").groupController;
// ==============================================================
// ---------------------------------------------------
// @route   => /api/owners/:ownerId/groups
// @desc    => ADD NEW GROUP
// ---------------------------------------------------
router.route("/").post(createGroup);
// ==============================================================
module.exports = router;
