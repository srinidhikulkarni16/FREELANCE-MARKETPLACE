import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createConversation,
  getSingleConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);

export default router;