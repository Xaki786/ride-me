const router = require("express-promise-router")();
const {
  getUsers,
  createUser,
  login
} = require("../controllers").userController;
router
  .route("/")
  .get(getUsers)
  .post(createUser);

router.route("/login").post(login);
module.exports = router;
