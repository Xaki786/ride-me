const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  isDeleted: {
    type: Boolean,
    default: false
  },
  // customers: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "customer",
  //     required: true
  //   }
  // ],
  // car: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "car",
  //   required: true
  // },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "group"
  },
  bill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bill"
    // required: true
  },
  date: {
    type: String,
    default: Date.now(),
    required: true
  },
  readingStart: {
    type: Number
    // required: true
  },
  readingEnd: {
    type: Number
    // required: true
  },
  distance: {
    type: Number
    // required: true
    // calculate by subtrating endDistance from start
  },
  petrolUsed: {
    type: Number
    // required: true
  },
  checkInPlace: {
    type: String
    // required: true
  },
  checkOutPlace: {
    type: String
    // required: true
  },
  damageCost: Number
});
bookingSchema.methods.findCustomerIndex = async function(customerId) {
  const index = await this.customers.findIndex(customer =>
    customer.id.equals(customerId)
  );
  return index > -1;
};
const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
