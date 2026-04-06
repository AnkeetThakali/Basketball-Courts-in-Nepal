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

// Route to get ONE specific court
app.get('/courts/:id', async (req, res) => {
    try {
        // req.params.id grabs the ID from the URL
        const court = await Court.findById(req.params.id);
        
        if (!court) {
            return res.status(404).json({ message: "Court not found" });
        }
        
        res.json(court);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error or invalid ID format" });
    }
});

// ✅ connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

// ✅ start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));