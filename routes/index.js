// ==============================================================
// IMPORTING ALL ROUTES AND COMBINING THEM IN AN OBJECT
// ==============================================================
const userRoutes = require("./userRoutes");
const carRoutes = require("./carRoutes");
const ownerRoutes = require("./ownerRoutes");
const authRoutes = require("./authRoutes");
const customerRoutes = require("./customerRoutes");
const adminRoutes = require("./adminRoutes");
const bookingRoutes = require("./bookingRoutes");
// ==============================================================
// EXPORTING ROUTES AS NAMED EXPORTS
// ==============================================================
module.exports = {
  userRoutes,
  carRoutes,
  ownerRoutes,
  authRoutes,
  customerRoutes,
  adminRoutes,
  bookingRoutes
};
