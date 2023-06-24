import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/db.js";
import product from "./routes/productRoutes.js";
import user from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config();
db(); // connect to MongoDB

// important
app.use(cors());

// body parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

// router
app.get("/", async (req, res) => {
  res.send("Backend server is ready");
});

// category
// app.use("/api/category", categoryRoute);
// product
app.use("/api/products", product);
// auth
app.use("/api/users", user);

// error handler
app.use(notFound);
app.use(errorHandler);

// create server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
