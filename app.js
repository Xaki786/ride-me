const express = require("express");
const app = express();
// =============================================================
// START MONGO AND SERVER
// =============================================================
// MIDDLEWARES
// =============================================================
app.use(express.json());
// =============================================================
// ERROR MIDDLEWARE FOR PAGE NOT FOUND
// =============================================================
app.use((req, res, next) => {
  const error = new Error("404 Page Not Found");
  error.status = 404;
  return next(error);
});
// =============================================================
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  return res.status(status).json({
    message: error.message
  });
});
// =============================================================
// ERROR HANDLING MIDDLEWARE
// =============================================================
