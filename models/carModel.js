const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({});

const carModel = mongoose.model("car", carSchema);
module.exports = carModel;
