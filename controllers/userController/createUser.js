const { User, Customer, Owner } = require("../../models");
const generateToken = require("../../helpers/generateToken");
module.exports = async (req, res, next) => {
  // ------------------------------------------------
  // CHECK IF THE USER WITH SAME EMAIL ADDRESS IS ALREADY PRESENT
  // ------------------------------------------------
  const foundUser = await User.findOne({
    "local.email": req.body.email
  });
  // ------------------------------------------------
  //  IF USER FOUND, SEND AN ERROR
  // ------------------------------------------------
  if (foundUser) {
    const error = new Error(
      "User with the same email address is already present"
    );
    error.status = 400;
    return next(error);
  }
  // ------------------------------------------------
  // USER NOT FOUND, NOW FETCH THESE VALUES FROM REQUEST OBJECT
  // ------------------------------------------------
  const {
    email,
    password,
    name,
    address,
    phoneNumber,
    userType,
    licenseNumber
  } = req.body;
  // ------------------------------------------------
  //  CREATE NEW USER OBJECT LATER TO BE SAVED IN DATABASE
  // ------------------------------------------------
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
  // ------------------------------------------------
  //  CHECK IF USER TYPE IS OWNER, THEN CREATE OWNER INSTANCE ALSO
  // ------------------------------------------------
  if (dbUser.userType === "owner") {
    dbOwner = new Owner({
      licenseNumber: licenseNumber,
      permission: false
    });
    // ------------------------------------------------
    // SAVE OWNER REFRENCE IN THE USER AND USER REFREENCE IN THE OWNER
    // ------------------------------------------------
    dbUser.owner = dbOwner;
    dbOwner.user = dbUser;
    await dbOwner.save();
  }
  // ------------------------------------------------
  //  CHECK IF USER TYPE IS CUSTOMER, THEN CREATE CUSTOMER INSTANCE ALSO
  // ------------------------------------------------
  else if (dbUser.userType === "customer") {
    dbCustomer = new Customer();
    // ------------------------------------------------
    // SAVE CUSTOMER REFRENCE IN THE USER AND USER REFREENCE IN THE CUSTOMER
    // ------------------------------------------------
    dbUser.customer = dbCustomer;
    dbCustomer.user = dbUser;
    await dbCustomer.save();
  }
  // ------------------------------------------------
  //  CHECK IF USER TYPE IS NOT CUSTOMER OR OWNER, THEN SEND AN ERROR RESPONSE
  // ------------------------------------------------
  else {
    const error = new Error("Unknown user type, it must be customer or owner");
    error.status = 400;
    return next(error);
  }
  // ------------------------------------------------
  //  SAVE THE USER IN THE DATABASE
  // ------------------------------------------------
  await dbUser.save();
  const token = await generateToken(dbUser);
  // ------------------------------------------------
  // REDIRECTING USER TO THE PROFILE PAGE
  // ------------------------------------------------
  return res.redirect(`/api/users/${dbUser.id}?token=${token}`);
};
