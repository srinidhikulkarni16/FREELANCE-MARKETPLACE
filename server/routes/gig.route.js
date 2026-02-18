import express from "express";
import { gigs } from "../mockData/gigs.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// ✅ GET all gigs
router.get("/", (req, res) => {
  res.status(200).json(gigs);
});

// ✅ GET single gig by ID
router.get("/single/:id", (req, res) => {
  const gig = gigs.find((g) => g.id === parseInt(req.params.id));
  if (!gig) return res.status(404).json({ message: "Gig not found" });
  res.status(200).json(gig);
});

// ✅ CREATE a new gig (protected route)
router.post("/", verifyToken, (req, res) => {
  const newGig = {
    id: gigs.length + 1,
    ...req.body,
  };
  gigs.push(newGig);
  res.status(201).json(newGig);
});

// ✅ DELETE a gig by ID (protected route)
router.delete("/:id", verifyToken, (req, res) => {
  const index = gigs.findIndex((g) => g.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Gig not found" });
  const deletedGig = gigs.splice(index, 1);
  res.status(200).json(deletedGig[0]);
});

export default router;
