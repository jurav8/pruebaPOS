const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    price: Number,
    cost: {
      type: Number,
      required: true,
    },
    status: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
