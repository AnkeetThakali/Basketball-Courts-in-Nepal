import express from "express";
import Court from "../models/courts.js";

const router = express.Router();

// GET all courts
router.get("/", async (req, res) => {
  const courts = await Court.find();
  res.json(courts);
});

// GET single court
router.get("/:slug", async (req, res) => {
  const court = await Court.findOne({ slug: req.params.slug });
  res.json(court);
});

export default router;