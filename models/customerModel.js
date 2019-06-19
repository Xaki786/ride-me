const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({});

const customerModel = mongoose.model("customer", customerSchema);
module.exports = customerModel;
