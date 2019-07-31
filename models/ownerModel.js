const mongoose = require("mongoose");
const ownerSchema = new mongoose.Schema({
  licenseNumber: {
    type: String,
    required: true
  },
  permission: {
    type: Boolean
    // required: true,
    // default: false
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "car"
    }
  ],
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "group"
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

ownerSchema.methods.isValidUser = async function(userId) {
  return await this.user._id.equals(userId);
};
const ownerModel = mongoose.model("owner", ownerSchema);
module.exports = ownerModel;
