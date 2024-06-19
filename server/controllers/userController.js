import asyncHandler from "express-async-handler";

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "Login User" });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "Register User" });
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

const forgetPassword = asyncHandler(async (req, res) => {
  res.status(200).json({ mesage: "Forget Password" });
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
