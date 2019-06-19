const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({});

const groupModel = mongoose.model("group", groupSchema);
module.exports = groupModel;
