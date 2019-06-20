const { User, Car, Owner, Booking, Bill, Customer } = require("../models");
const JWT = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const generateToken = user => {
  return JWT.sign(
    {
      issuer: "ride-me-app",
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 2)
    },
    jwtSecret
  );
};
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

    const token = await generateToken(dbUser);
    return res.status(201).json({
      token,
      message: "Signed up",
      user: dbUser
    });
  },
  // VALIDATION: PENDING
  login: async (req, res, next) => {
    const token = await generateToken(req.user);
    return res.status(200).json({
      token,
      message: "Logged In"
    });
  }
};
