import express from "express";
import Gallery from "../model/Gallery.js";

const router = express.Router();

// http://localhost:3002/gallery
// http://localhost:3002/gallery/addGallery
// http://localhost:3002/gallery/updateGallery/:id
// http://localhost:3002/gallery/deleteGallery/:id

// ✅ GET all teachers
router.get("/", async (req, res) => {
  try {
    const data = await Gallery.find();
    res.send({ data });
  } catch (error) {
    res.status(500).send({ message: "Error fetching gallery", error });
  }
});

// ✅ ADD teacher
router.post("/addGallery", async (req, res) => {
  try {
    const data = req.body;
    await Gallery.create(data);
    res.send({ message: "Gallery added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error adding gallery", error });
  }
});

// ✅ DELETE teacher
router.delete("/deleteGallery/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedGallery = await Gallery.findByIdAndDelete(id);

    if (!deletedGallery) {
      return res.status(404).send({ message: "Gallery not found" });
    }

    res.send({ message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting gallery", error });
  }
});

export default router;
