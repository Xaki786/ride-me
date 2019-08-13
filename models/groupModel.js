const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  isDeleted: {
    type: Boolean,
    default: false
  },
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

// CHECK WHETHER GROUP CAPACITY IS FULL OR NOT
groupSchema.methods.isFull = async function() {
  try {
    if (this.customers.length >= 4) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error(error);
  }
};
// CHECK WHETHER CUSTOMER IS ALREADY PRESENT IN THIS GROUP
groupSchema.methods.isValidCustomer = async function(customerId) {
  try {
    const index = this.customers.findIndex(customer =>
      customer._id.equals(customerId)
    );
    return index !== -1;
  } catch (error) {
    throw new Error(error);
  }
};
groupSchema.methods.isValidOwner = async function(ownerId) {
  return this.owner._id.equals(ownerId);
};
module.exports = mongoose.model("group", groupSchema);
