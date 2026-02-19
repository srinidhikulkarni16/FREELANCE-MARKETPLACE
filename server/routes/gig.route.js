import express from "express";
import { gigs } from "../mockData/gigs.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(gigs);
});

router.get("/single/:id", (req, res) => {
  const gig = gigs.find((g) => g.id === parseInt(req.params.id));
  if (!gig) return res.status(404).json({ message: "Gig not found" });
  res.status(200).json(gig);
});

router.post("/", verifyToken, (req, res) => {
  const newGig = {
    id: gigs.length + 1,
    ...req.body,
  };
  gigs.push(newGig);
  res.status(201).json(newGig);
});

router.delete("/:id", verifyToken, (req, res) => {
  const index = gigs.findIndex((g) => g.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Gig not found" });
  const deletedGig = gigs.splice(index, 1);
  res.status(200).json(deletedGig[0]);
});

export default router;
