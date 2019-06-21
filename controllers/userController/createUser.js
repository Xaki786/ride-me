const { User, Customer, Owner } = require("../../models");
const generateToken = require("./generateToken");
module.exports = async (req, res, next) => {
  const {
    email,
    password,
    name,
    address,
    phoneNumber,
    userType,
    licenseNumber
  } = req.body;
  console.log("userType :", userType);
  const dbUser = new User({
    method: "local",
    local: {
      email,
      password,
      name
    },
    address,
    userType,
    phoneNumber
  });
  let dbOwner = {};
  let dbCustomer = {};
  console.log("dbUser.phoneNumber :", dbUser.phoneNumber);
  if (dbUser.userType === "owner") {
    dbOwner = new Owner({
      licenseNumber: licenseNumber,
      permission: false
    });
    dbUser.owner = dbOwner;
    await dbOwner.save();
  } else {
    dbCustomer = new Customer();
    dbUser.customer = dbCustomer;
    dbCustomer.save();
  }
  await dbUser.save();
  const token = await generateToken(dbUser);
  return res.status(201).json({
    token,
    message: "Signed up",
    user: dbUser
  });
};
