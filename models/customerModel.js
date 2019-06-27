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

const customerModel = mongoose.model("customer", customerSchema);
module.exports = customerModel;
