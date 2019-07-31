const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  isDeleted: {
    type: Boolean,
    default: false
  },
  carNumber: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "owner"
  },
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "group"
    }
  ],
  bills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bill"
    }
  ],
  insuranceAmount: Number,
  propertyTax: Number,
  tyreCost: Number,
  emissionCost: Number,
  serviceCost: Number,
  milage: Number
  // lastReading: {
  //   type: Number,
  //   required: true
  // }
  //   I don't know what these are
  //   lastBooking: Number",
  //   nextBooking: "Number(confused)"
});
carSchema.methods.isValidCar = async function() {
  return (await this.isDeleted) !== true;
};
const carModel = mongoose.model("car", carSchema);
module.exports = carModel;
