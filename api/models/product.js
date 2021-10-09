const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: Array,
      required: true,
      default: [],
    },
    size: {
      type: Array,
      required: true,
      default: [],
    },
    quantity: {
      type: Number,
      required: true,
    },
    categories: {
      type: Array,
    },
    inStock: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("product", productSchema);
