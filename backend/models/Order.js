import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  items: [{ productId: String, name: String, price: Number, quantity: Number }],
  total: Number,
  customer: { name: String, phone: String, address: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", OrderSchema);
