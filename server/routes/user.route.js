import express from "express";
import { deleteUser, getUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

// GET all users
router.get("/", getUsers);

// GET single user
router.get("/:id", getUser);

// DELETE user
router.delete("/:id", deleteUser);

export default router;
