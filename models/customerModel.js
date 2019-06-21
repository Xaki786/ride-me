const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking"
    }
  ]
});

const customerModel = mongoose.model("customer", customerSchema);
module.exports = customerModel;
