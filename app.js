const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
// ==============================================================
// IMPORTING ROUTES
// ==============================================================
const {
  userRoutes,
  carRoutes,
  ownerRoutes,
  authRoutes,
  customerRoutes,
  adminRoutes,
  bookingRoutes,
  ownerGroupRoutes,
  customerGroupRoutes
} = require("./routes");
const app = express();

// =============================================================
// IMPORTING KEYS
// =============================================================
const { mongoURI } = require("./config");
// =============================================================
// START MONGO AND SERVER
// =============================================================
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const PORT = app.get("PORT") || 5000;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("===========================================");
    console.log("MONGO DB STARTED");
    app.listen(PORT, () => {
      console.log(`SERVER STARTED AT PORT ${PORT}`);
      console.log("===========================================");
    });
  })
  .catch(err => {
    console.log("Error starting server of mongo", err);
  });
// =============================================================
// MIDDLEWARES
// =============================================================
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
// -----------------------------------
// ROUTES MIDDLEWARES
// -----------------------------------
const UsersURI = "/api/users";
const CustomersURI = "/api/customers/:customerId";
const OwnersURI = "/api/owners/:ownerId";
const AdminURI = "/api/admin";
const AuthURI = "/api/auth";
// -----------------------------------
// ADMIN ROUTES
// -----------------------------------
app.use(`${AdminURI}/`, adminRoutes);
// -----------------------------------
// USER AND AUTHENTICATION ROUTES
// -----------------------------------
app.use(`${UsersURI}/`, userRoutes);
app.use(`${AuthURI}`, authRoutes);
// -----------------------------------
// OWNER AND NESTED ROUTES
// -----------------------------------
app.use(`${OwnersURI}`, ownerRoutes);
app.use(`${OwnersURI}/cars`, carRoutes);
app.use(`${OwnersURI}/groups`, ownerGroupRoutes);
// -----------------------------------
// CUSTOMER AND NESTED ROUTES
// -----------------------------------
app.use(`${CustomersURI}`, customerRoutes);
app.use(`${CustomersURI}/bookings`, bookingRoutes);
app.use(`${CustomersURI}/groups`, customerGroupRoutes);
// -----------------------------------
// =============================================================
// ERROR MIDDLEWARE FOR PAGE NOT FOUND
// =============================================================
app.use((req, res, next) => {
  const error = new Error("404 Page Not Found");
  error.status = 404;
  return next(error);
});
// =============================================================
// ERROR HANDLING MIDDLEWARE
// =============================================================
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  if (app.get("env") === "development") {
    console.error(error);
  }
  return res.status(status).json({
    message: error.message
  });
});
// =============================================================
