const { generateToken } = require("../../helpers");
module.exports = async (req, res, next) => {
  const token = await generateToken(req.user);
  return res.redirect(`/api/users/${req.user.id}?token=${token}`);
  // return res.status(200).json({
  //   token,
  //   message: "Logged In"
  // });
};
