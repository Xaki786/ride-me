const mongoose = require("mongoose");
const billSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "booking",
    required: true
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "car"
    // required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  // fetch distance from booking
  // fetch petrol from booking
  // fetch bill from booking
  // ========================================
  // don't know what it is
  yearlyFixedCost: Number,
  // ========================================
  // confused as I don't know how to calculate cost per head of customer if their destinations are different
  paid: {
    type: Boolean
    // required: true
  }
});

const billModel = mongoose.model("bill", billSchema);
module.exports = billModel;
