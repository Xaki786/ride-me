// ==========================================================
// LOGIN USER API
// ==========================================================
const { generateToken } = require("../../helpers");
module.exports = async (req, res, next) => {
  // ----------------------------------------------------
  // USER IS LOGGED IN BY PASSPORT LOCAL STRATEGY, NOW GENERATE TOKEN BY USING JSON WEB TOKENS AND           SUBJECT IS USER ID.
  // ----------------------------------------------------
  const token = await generateToken(req.user);
  // ----------------------------------------------------
  //  REDIRECT USER TO THE PROFILE PAGE AND SEND TOKEN IN THE URL
  // ----------------------------------------------------
  return res.redirect(`/api/users/${req.user.id}?token=${token}`);
};
