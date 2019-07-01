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
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

ownerSchema.methods.isValidUser = async function(userId) {
  // console.log(this);
  // console.log(this.user, userId);
  return await this._id.equals(userId);
};
const ownerModel = mongoose.model("owner", ownerSchema);
module.exports = ownerModel;
