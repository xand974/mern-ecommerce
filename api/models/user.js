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
      default: "",
    },
    email: {
      type: String,
      unique: true,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    genre: {
      type: String,
      default: "",
    },
    job: {
      type: String,
      default: "",
    },
    birth: {
      type: String,
      default: "",
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
