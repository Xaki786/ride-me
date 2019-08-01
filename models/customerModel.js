const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  isDeleted: {
    type: Boolean,
    default: false
  },
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

customerSchema.methods.isValidUser = async function(userId) {
  return await this.user._id.equals(userId);
};
const customerModel = mongoose.model("customer", customerSchema);
module.exports = customerModel;
