import mongoose from "mongoose";
import Gig from "./models/gig.model.js";
import { gigs } from "./mockData/gigs.js";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await Gig.deleteMany();

    const transformedGigs = gigs.map((gig) => ({
      userId: new mongoose.Types.ObjectId(),

      // Main fields
      title: gig.desc,
      desc: gig.desc,
      price: gig.price,
      cat: gig.cat,
      cover: gig.img,
      images: [],

      // Rating fields
      totalStars: Math.round(gig.star * gig.reviewCount),
      starNumber: gig.reviewCount,

      // ✅ Required schema fields
      shortTitle: gig.desc.substring(0, 30),
      shortDesc: gig.desc.substring(0, 80),
      deliveryTime: Math.floor(Math.random() * 7) + 1, // 1–7 days
      revisionNumber: Math.floor(Math.random() * 5) + 1, // 1–5 revisions
    }));

    await Gig.insertMany(transformedGigs);

    console.log("✅ Gigs seeded successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

await connect();
await seedData();
