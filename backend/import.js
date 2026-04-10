import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Court from "./models/courts.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

// load JSON
const courts = JSON.parse(fs.readFileSync("../src/assets/courts.json", "utf-8"));
// const futsal = JSON.parse(fs.readFileSync("../src/assets/futsal.json", "utf-8"));

// slug helper
function createSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

async function importData() {
  try {
    // Wait for connection first
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    await Court.deleteMany();

    const formatted = courts.map(court => ({
      ...court,
      slug: createSlug(court.name)
    }));

    await Court.insertMany(formatted);

    console.log("✅ Data imported!");
    process.exit();
  } catch (err) {
    console.error("❌ Error importing data:", err);
    process.exit(1);
  }
}

importData();