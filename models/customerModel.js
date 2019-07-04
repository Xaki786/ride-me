const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking"
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
