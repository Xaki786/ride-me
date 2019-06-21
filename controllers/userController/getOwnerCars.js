const { User, Owner, Car } = require("../../models");
module.exports = async (req, res, next) => {
  // FIND USER
  const dbUser = await User.findById(req.params.userId);
  console.log("dbUser :", dbUser);

  // FIND OWNER AND POUPULATE CARS
  const dbOwner = await Owner.findById(req.params.ownerId).populate("cars");
  console.log("dbOwner", dbOwner);

  // RETURN CARS
  res.status(200).json({
    cars: dbOwner.cars
  });
};
