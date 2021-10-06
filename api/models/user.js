const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);

module.exports = new mongoose.model("user", userSchema);
