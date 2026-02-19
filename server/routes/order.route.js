import express from "express";
import { verifyToken } from "../middleware/jwt.js";
// MAKE SURE getOrders IS IN THIS LIST
import { intent, confirm, getOrders } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;