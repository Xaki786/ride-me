const { User } = require("../../models");
module.exports = async (req, res, next) => {
  const dbUsers = await User.find();
  return res.status(200).json({
    users: dbUsers
  });
};
