const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    genre: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("user", userSchema);
