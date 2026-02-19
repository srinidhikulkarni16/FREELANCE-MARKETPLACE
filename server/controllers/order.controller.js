import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";

export const intent = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    const mockPaymentIntentId = "pi_mock_" + Math.random().toString(36).slice(5);

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: mockPaymentIntentId,
      isCompleted: false,
    });

    await newOrder.save();

    res.status(200).send({
      clientSecret: mockPaymentIntentId + "_secret_123",
    });
  } catch (err) {
    next(err);
  }
};

export const confirm = async (req, res, next) => {
  try {
    await Order.findOneAndUpdate(
      { payment_intent: req.body.payment_intent },
      { $set: { isCompleted: true } }
    );
    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};

// ADD THIS FUNCTION HERE
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};