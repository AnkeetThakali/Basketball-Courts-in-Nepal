import express from "express";
import Court from "../models/courts.js";

const router = express.Router();

// GET all courts
router.get("/:id", async (req, res) => {
    try {
        // Use the Model name exactly as you defined it (usually Court)
        const court = await Court.findById(req.params.id); 
        
        if (!court) return res.status(404).json({ message: "Court not found" });
        res.json(court);
    } catch (err) {
        res.status(500).json({ message: "Invalid ID format or Server Error" });
    }
});

// GET single court
router.get("/:slug", async (req, res) => {
  const court = await Court.findOne({ slug: req.params.slug });
  res.json(court);
});

export default router;