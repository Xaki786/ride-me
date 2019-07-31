// IMPORT REDUIRED MODELS => USER, CUSTOMER, BOOKING
const { User, Customer, Booking } = require("../../models");
module.exports = async (req, res, next) => {
  // -------------------------------------------------------
  // GET => /api/users/:userId/customer/:customerId/bookings/:bookingId
  // -------------------------------------------------------
  // CHECK IF THERE IS A VALID USER
  // -------------------------------------------------------
  const { userId, customerId, bookingId } = req.params;
  const dbUser = await User.findById(userId);
  if (!dbUser) {
    const error = new Error("Invalid User");
    error.status = 400;
    return next(error);
  }
  // -------------------------------------------------------
  // CHECK IF THERE IS A VALID CUSTOMER
  // -------------------------------------------------------
  const dbCustomer = await Customer.findById(customerId);
  if (!dbCustomer) {
    const error = new Error("Invalid Customer");
    error.status = 400;
    return next(error);
  }
  // -------------------------------------------------------
  //   CHECK IF USER IS SAME AS PROVIDED IN CUSTOMER'S DOCUMENT
  // -------------------------------------------------------
  const isValidUser = await dbCustomer.isValidUser(dbUser.id);
  if (!isValidUser) {
    const error = new Error("Invalid User Second");
    error.status = 400;
    return next(error);
  }
  // -------------------------------------------------------
  // SEARCH FOR BOOKING THROUGH BOOKING ID
  // POPULATE BOOKING FIELDS => CAR => OWNER(NAME AND EMAIL) => CUSTOMERS(NAME AND EMAIL) => BILL(PAYMENT)
  // -------------------------------------------------------
  const dbBooking = await Booking.findById(bookingId)
    .populate({
      path: "customers",
      select: "user",
      populate: {
        path: "user",
        select: "name local.email"
      }
    })
    .populate({
      path: "car",
      select: "owner",
      populate: {
        path: "owner",
        select: "user",
        populate: {
          path: "user",
          select: "local.email, name"
        }
      }
    })
    .populate("bill", "payment paid");

  // -------------------------------------------------------
  // MODIFY BOOKING TO SEND USER REALTED DATA ONLY
  // -------------------------------------------------------
  const modifiedBooking = {};
  modifiedBooking.customers = [
    ...dbBooking.customers.map(customer => {
      return {
        email: customer.user.local.email,
        name: customer.user.name
      };
    })
  ];
  modifiedBooking._id = dbBooking._id;
  modifiedBooking.carOwner = dbBooking.car.owner.user.name;
  modifiedBooking.bill = {
    payment: dbBooking.bill.payment,
    paid: dbBooking.bill.paid
  };

  // -------------------------------------------------------
  // SEND THIS DATA TO THE USER
  // -------------------------------------------------------
  return res.status(200).json({
    booking: modifiedBooking
  });
};
