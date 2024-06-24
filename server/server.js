import express from "express";
import { notFound, errorHanlder } from "./middlewares/errorMiddleware.js";
import { PORT } from "./config/index.js";
import dbConnect from "./database/index.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

dbConnect();

app.use(notFound);

app.use(errorHanlder);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
