const { User, Owner } = require("../../models");
module.exports = async (req, res, next) => {
  const dbUser = await User.findById(req.params.userId);
  if (!dbUser) {
    const error = new Error("User Not Found");
    error.status = 404;
    return next(error);
  }
  const dbOwner = await Owner.findById(req.params.ownerId).populate("cars");
  if (!dbOwner) {
    const error = new Error("Owner Not Found");
    error.status = 404;
    return next(error);
  }
  return res.status(200).json({
    user: dbOwner
  });
};
