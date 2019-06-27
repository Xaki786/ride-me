const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    }
  },
  name: {
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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "owner"
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer"
  },
  userType: {
    type: String,
    required: true
  }
});

userSchema.pre("save", async function(next) {
  try {
    if (this.method !== "local") {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.local.password = await bcrypt.hash(this.local.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.isValidPassword = async function(password) {
  try {
    return await bcrypt.compare(password, this.local.password);
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
