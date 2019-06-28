const router = require("express-promise-router")({ mergeParams: true });
const passport = require("../passport");
const { login, signup } = require("../controllers").authController;

// ====================================================================
// @ROUTE   => /api/users/login/auth
// @DESC   => Login User using passport local strategy
// ----------------------------------------------------------
router
  .route("/login")
  .post(passport.authenticate("local", { session: false }), login);
// ====================================================================
// @ROUTE   => /api/users/login/auth
// @DESC    =>  SIGN UP USER AND THEN GENERATE TOKEN FOR HIM. DECIDE AT GENERATION TIME, WHETHER THE USER                 IS CUSTOMER OR OWNER
// ----------------------------------------------------------
router.route("/signup").post(signup);
// ====================================================================
module.exports = router;
