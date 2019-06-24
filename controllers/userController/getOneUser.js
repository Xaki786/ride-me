const { User } = require("../../models");
module.exports = async (req, res, next) => {
  const dbUser = await User.findById(req.params.userId);
  if (dbUser) {
    return res.status(200).json({
      user: dbUser
    });
  }
  const error = new Error("User Not Found");
  error.status = 404;
  return next(error);
};
