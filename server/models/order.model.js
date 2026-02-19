
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  gigId: { type: String, required: true },
  img: String,
  title: String,
  buyerId: String,
  sellerId: String,
  price: Number,
  payment_intent: String,
  status: String,
  isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

const Order = mongoose.model("Order", OrderSchema);

export default Order;
