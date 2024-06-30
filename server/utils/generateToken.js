import jwt from "jsonwebtoken";
import { JWT_SECRET, NODE_ENV } from "../config/index.js";

const generateToken = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "30d" });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    console.error("Error generating token:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default generateToken;
