const mongoose = require("mongoose");
const ownerSchema = new mongoose.Schema({});

const ownerModel = mongoose.model("owner", ownerSchema);
module.exports = ownerModel;
