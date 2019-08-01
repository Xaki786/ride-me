const { User, Customer, Owner } = require("../../models");
module.exports = async (req, res, next) => {
  const dbUser = await User.findById(req.params.userId);
  // ---------------------------------------------------------
  // Token is sent in url as a query after successfull login
  // "Token: ", req.query.token;
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // If User is found in the database
  // ---------------------------------------------------------
  if (dbUser && !dbUser.isDeleted) {
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
      if (!dbOwner || dbOwner.isDeleted) {
        const error = new Error("Not a registered owner");
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
      // check if the user type is customer then send the customer detail
      // ---------------------------------------------------------
    } else if (dbUser.userType === "customer") {
      // ---------------------------------------------------------
      // find customer in the database from customer id stored inside user and fetch details of bookings from the database
      // ---------------------------------------------------------
      const dbCustomer = await Customer.findById(dbUser.customer).populate(
        "bookings"
      );

      // ---------------------------------------------------------
      // if there is no customer present inside the databse or has been deleted temporarily then send error
      // ---------------------------------------------------------
      if (!dbCustomer || dbCustomer.isDeleted) {
        const error = new Error("Not a registered customer");
        error.status = 404;
        return next(error);
      }

      // ---------------------------------------------------------
      // customer is found, now combine user info and customer info and send it to the frontend to show the profile page
      // ---------------------------------------------------------
      const {
        address,
        userType,
        phoneNumber,
        local: { email, name }
      } = dbUser;
      const { bookings } = dbCustomer;
      return res.status(200).json({
        email,
        name,
        address,
        userType,
        phoneNumber,
        bookings
      });
    }
    // ---------------------------------------------------------
    // user type is undefined so send error
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
