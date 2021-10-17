const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      { productId: { type: String, required: true } },
      { quantity: { type: Number, default: 1 } },
    ],
    status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("order", orderSchema);
