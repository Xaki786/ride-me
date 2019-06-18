const { User } = require("../models");
module.exports = {
  // VALIDATION NOT REQUIRED
  getUsers: async (req, res, next) => {
    const dbUsers = await User.find();
    return res.status(200).json({
      users: dbUsers
    });
  },
  // VALIDATION: PENDING
  createUser: async (req, res, next) => {
    const {
      email,
      password,
      name,
      licenseNumber,
      address,
      phoneNumber
    } = req.body;
    const dbUser = new User({
      method: "local",
      local: {
        email,
        password,
        name,
        licenseNumber,
        address,
        phoneNumber
      }
    });
    await dbUser.save();

    return res.status(201).json({
      user: dbUser
    });
  },
  login: async (req, res, next) => {
    const dbUser = await User.findOne({ "local.email": req.body.email });
    if (!dbUser) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }
    if (!dbUser.isValidPassword(req.body.password)) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }
    return res.status(200).json({
      message: "Logged In",
      user: dbUser
    });
  }
};
