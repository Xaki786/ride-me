const mongoose = require("mongoose");
const billSchema = new mongoose.Schema({});

const billModel = mongoose.model("bill", billSchema);
module.exports = billModel;
