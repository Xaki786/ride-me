// ==============================================================
// IMPORTING BOOKING CONTROLLER METHODS
// ==============================================================
const createBooking = require("./createBooking");
const getOneBooking = require("./getOneBooking");
const updateBooking = require("./updateBooking");
// ==============================================================
module.exports = {
  // ============================================================
  // CREATE A NEW BOOKING FOR A SPECIFIED CUSTOMER
  // ============================================================
  // ROUTE   =>  /api/users/:userId/customer/:customerId/bookings
  // METHOD  =>  POST
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  createBooking,
  // ============================================================
  // GET DATA OF A BOOKING
  // ============================================================
  // ROUTE   =>  /api/users/:userId/customer/:customerId/bookings/:bookingId
  // METHOD  =>  GET
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  getOneBooking,
  // ============================================================
  // EDIT AN ALREADY EXISTING BOOKING IN THE DATABASE AND SOTRE NEW CUSTOMER DATA IN IT
  // ============================================================
  // ROUTE   =>  /api/users/:userId/customer/:customerId/bookings/:bookingId
  // METHOD  =>  PUT
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // AUTHENTICATON: PENDING
  // ----------------------------------------------------
  updateBooking
  // ============================================================
};
