import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import courtRoutes from "./routes/courts.js"; // 👈 import routes

dotenv.config();

// ✅ create app FIRST
const app = express();

// ✅ middleware
app.use(cors());
app.use(express.json());

// ✅ THEN use routes
app.use("/courts", courtRoutes);

// ✅ connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

// ✅ start server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});