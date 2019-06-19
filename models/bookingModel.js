const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
