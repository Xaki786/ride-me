const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking"
    }
  ],
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "car"
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "owner"
  },
  customers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer"
    }
  ]
});

module.exports = mongoose.model("group", groupSchema);
