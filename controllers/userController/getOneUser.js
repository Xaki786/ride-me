const { User, Owner } = require("../../models");
module.exports = async (req, res, next) => {
  const dbUser = await User.findById(req.params.userId);
  // ---------------------------------------------------------
  // Token is sent in url as a query after successfull login
  // "Token: ", req.query.token;
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // If User is found in the database
  // ---------------------------------------------------------
  if (dbUser) {
    // ---------------------------------------------------------
    // check if the user type is owner then send the owner detail
    // ---------------------------------------------------------
    if (dbUser.userType === "owner") {
      // ---------------------------------------------------------
      // find owner in the database from owner id stored inside user and fetch details of cars from the database
      // ---------------------------------------------------------
      const dbOwner = await Owner.findById(dbUser.owner).populate("cars");

      // ---------------------------------------------------------
      // if there is no owner present inside the databse then send error
      // ---------------------------------------------------------
      if (!dbOwner) {
        const error = new Error("Owner Not Found");
        error.status = 404;
        return next(error);
      }

      // ---------------------------------------------------------
      // owner is found, now combine user info and owner info and send it to the frontend to show the profile page
      // ---------------------------------------------------------
      const {
        address,
        userType,
        phoneNumber,
        local: { email, name }
      } = dbUser;
      const { cars, licenseNumber, permission } = dbOwner;
      return res.status(200).json({
        email,
        name,
        address,
        userType,
        phoneNumber,
        cars,
        licenseNumber,
        permission
      });

      // ---------------------------------------------------------
      // check if the user type is customer then send the owner detail
      // ---------------------------------------------------------
    } else if (dbUser.userType === "customer") {
      return res.send("Hi from customer profile");
    }
    // ---------------------------------------------------------
    // check if the user type is undefined then send error
    // ---------------------------------------------------------
    else {
      const error = new Error("Invalid User");
      error.status = 404;
      return next(error);
    }
  }
  // ---------------------------------------------------------
  // If user is not present in the database, then send error message
  // ---------------------------------------------------------
  const error = new Error("User Not Found");
  error.status = 404;
  return next(error);
};
