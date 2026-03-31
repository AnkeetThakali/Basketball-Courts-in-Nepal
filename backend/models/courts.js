import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({
  name: String,
  slug: String,
  phone: String,
  location: {
    address: String,
    lat: Number,
    lng: Number
  },
  google_maps_link: String,
  image: String,
  type: String,
  description: String
});

export default mongoose.model("Court", courtSchema);