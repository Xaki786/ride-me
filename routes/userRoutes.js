const router = require("express-promise-router")();
const passport = require("../passport");
const {
  getUsers,
  createUser,
  login
} = require("../controllers").userController;
router
  .route("/")
  .get(getUsers)
  .post(createUser);

router.route("/customer").get();
router
  .route("/login")
  .post(passport.authenticate("local", { session: false }), login);

module.exports = router;
