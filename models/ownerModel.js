const mongoose = require("mongoose");
const ownerSchema = new mongoose.Schema({
  licenseNumber: {
    type: String,
    required: true
  },
  permission: {
    type: Boolean,
    required: true,
    default: false
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "car"
    }
  ]
});

const ownerModel = mongoose.model("owner", ownerSchema);
module.exports = ownerModel;
