const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  customers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true
    }
  ],
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "car",
    required: true
  },
  bill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bill",
    required: true
  },
  date: {
    type: String,
    default: Date.now(),
    required: true
  },
  readingStart: {
    type: Number,
    required: true
  },
  readingEnd: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
    // calculate by subtrating endDistance from start
  },
  petrolUsed: {
    type: Number,
    required: true
  },
  checkInPlace: {
    type: String,
    required: true
  },
  checkOutPlace: {
    type: String,
    required: true
  },
  damageCost: Number
});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
