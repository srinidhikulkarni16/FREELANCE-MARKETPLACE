import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";

dotenv.config();

const app = express();

// =============================
// 🔹 MongoDB Connection
// =============================
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Stop server if DB fails
  }
};

// =============================
// 🔹 Middleware
// =============================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// =============================
// 🔹 Health Check Route
// =============================
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running successfully 🚀",
  });
});

// =============================
// 🔹 API Routes
// =============================
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

// =============================
// 🔹 404 Handler (VERY IMPORTANT)
// =============================
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: `Route ${req.originalUrl} not found`,
  });
});

// =============================
// 🔹 Global Error Handler
// =============================
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    status: "error",
    message,
  });
});

// =============================
// 🔹 Start Server
// =============================
const PORT = 8800;

app.listen(PORT, async () => {
  await connect();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
