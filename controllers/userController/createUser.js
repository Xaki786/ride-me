const { User, Customer, Owner } = require("../../models");
const generateToken = require("../../helpers/generateToken");
module.exports = async (req, res, next) => {
  // check if user with the same email address is already present in the db
  const foundUser = await User.findOne({ "local.email": req.body.email });
  if (foundUser) {
    const error = new Error(
      "User with the same email address is already present"
    );
    error.status = 400;
    return next(error);
  }
  const {
    email,
    password,
    name,
    address,
    phoneNumber,
    userType,
    licenseNumber
  } = req.body;
  const dbUser = new User({
    method: "local",
    local: {
      email,
      password
    },
    name,
    address,
    userType,
    phoneNumber
  });
  let dbOwner = {};
  let dbCustomer = {};
  if (dbUser.userType === "owner") {
    dbOwner = new Owner({
      licenseNumber: licenseNumber,
      permission: false
    });
    dbUser.owner = dbOwner;
    await dbOwner.save();
  } else if (dbUser.userType === "customer") {
    dbCustomer = new Customer();
    dbUser.customer = dbCustomer;
    dbCustomer.save();
  } else {
    const error = new Error("Unknown user type, it must be customer or owner");
    error.status = 400;
    return next(error);
  }
  await dbUser.save();
  const token = await generateToken(dbUser);
  // REDIRECTING USER TO THE PROFILE PAGE
  return res.redirect(`/api/users/${dbUser.id}?token=${token}`);
  // return res.status(201).json({
  //   token,
  //   message: "Signed up"
  // });
};
