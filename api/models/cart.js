const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      { productId: { type: String, required: true } },
      { quantity: { type: Number, default: 1 } },
    ],
    totalQuantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("cart", cartSchema);
