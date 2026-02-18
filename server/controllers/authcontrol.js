import User from "../models/user.model.js";
import createError from "../services/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ================= REGISTER =================
export const register = async (req, res, next) => {
  console.log("=== REGISTER ROUTE HIT ===");
  console.log("Incoming body:", req.body);

  try {
    if (!req.body.password) {
      return next(createError(400, "Password is required"));
    }

    const hash = bcrypt.hashSync(req.body.password, 5);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    console.log("User saved successfully");

    res.status(201).send("User has been created.");
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    next(err);
  }
};

// ================= LOGIN =================
export const login = async (req, res, next) => {
  console.log("=== LOGIN ROUTE HIT ===");
  console.log("Incoming body:", req.body);

  try {
    // Use email instead of username
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log("User not found");
      return next(createError(404, "User not found!"));
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) {
      console.log("Wrong password");
      return next(createError(400, "Wrong password or email!"));
    }

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;

    console.log("Login successful");

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    next(err);
  }
};


// ================= LOGOUT =================
export const logout = async (req, res) => {
  console.log("=== LOGOUT ROUTE HIT ===");

  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
