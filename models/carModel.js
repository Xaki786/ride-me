const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  carNumber: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "owner"
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking"
    }
  ],
  bills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bill"
    }
  ],
  insuranceNumber: String,
  insuranceAmount: Number,
  propertyTax: Number,
  tyreCost: Number,
  serviceCost: Number,
  lastReading: {
    type: Number,
    required: true
  }
  //   I don't know what these are
  //   lastBooking: Number",
  //   nextBooking: "Number(confused)"
});

const carModel = mongoose.model("car", carSchema);
module.exports = carModel;
