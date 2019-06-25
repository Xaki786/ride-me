const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const { userRoutes } = require("./routes");
const app = express();

// =============================================================
// KEYS
const { mongoURI } = require("./config");
// =============================================================
// START MONGO AND SERVER
// =============================================================
const PORT = app.get("PORT") || 5000;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MONGO DB STARTED");
    app.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));
  })
  .catch(err => {
    console.log("Error starting server of mongo", err);
  });
// =============================================================
// MIDDLEWARES
// =============================================================
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
// =============================================================
// ROUTES
app.use("/api/users", userRoutes);
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
// =============================================================
