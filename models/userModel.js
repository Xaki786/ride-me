const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ["local"],
    required: true
  },
  local: {
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    licenseNumber: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    permission: {
      type: Number
    }
  }
});
