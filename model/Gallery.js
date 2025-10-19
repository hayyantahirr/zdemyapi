import mongoose from "mongoose";
const { Schema } = mongoose;

const gallerySchema = new Schema({
  image: String,
});

const Gallery = mongoose.model("Gallery", gallerySchema, "gallery");

export default Gallery;
