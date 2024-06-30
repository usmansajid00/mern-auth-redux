import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "Login User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "Logout User" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "Get User" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "Update User" });
});

export {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
