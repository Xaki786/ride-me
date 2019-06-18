const router = require("express-promise-router")();
const { getUsers } = require("../controllers").userController;
router.route("/").get(getUsers);
module.exports = router;
