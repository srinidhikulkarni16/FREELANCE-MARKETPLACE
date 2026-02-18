import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: "/img/noavatar.jpg", // default profile picture
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
