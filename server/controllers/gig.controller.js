// controllers/gig.controller.js
import { gigs } from "../mockData/gigs.js";

// 🔹 Create Gig (optional if using mockData only)
export const createGig = (req, res) => {
  const newGig = {
    id: gigs.length + 1,
    ...req.body,
  };
  gigs.push(newGig);
  res.status(201).json(newGig);
};

// 🔹 Get Single Gig
export const getGig = (req, res) => {
  const gig = gigs.find((g) => g.id === parseInt(req.params.id));
  if (!gig) return res.status(404).json({ message: "Gig not found" });
  res.status(200).json(gig);
};

// 🔹 Get All Gigs (with filters and sorting)
export const getGigs = (req, res) => {
  const { cat, min, max, sort, search } = req.query;

  let filteredGigs = [...gigs];

  // Filter by category
  if (cat) {
    filteredGigs = filteredGigs.filter((gig) => gig.cat === cat);
  }

  // Filter by search (matches description or username)
  if (search) {
    const lowerSearch = search.toLowerCase();
    filteredGigs = filteredGigs.filter(
      (gig) =>
        gig.desc.toLowerCase().includes(lowerSearch) ||
        gig.username.toLowerCase().includes(lowerSearch)
    );
  }

  // Filter by price range
  if (min) {
    filteredGigs = filteredGigs.filter((gig) => gig.price >= parseFloat(min));
  }
  if (max) {
    filteredGigs = filteredGigs.filter((gig) => gig.price <= parseFloat(max));
  }

  // Sort
  if (sort === "sales") {
    filteredGigs.sort((a, b) => b.star - a.star); // top rating first
  } else if (sort === "createdAt") {
    filteredGigs.sort((a, b) => b.id - a.id); // newest first
  }

  res.status(200).json(filteredGigs);
};

// 🔹 Delete Gig (optional if using mockData only)
export const deleteGig = (req, res) => {
  const index = gigs.findIndex((g) => g.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Gig not found" });

  gigs.splice(index, 1);
  res.status(200).json({ message: "Gig deleted successfully" });
};
