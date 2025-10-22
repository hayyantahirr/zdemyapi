import express from "express";
import Careers from "../model/Careers.js";

const router = express.Router();

// http://localhost:3002/careers
// http://localhost:3002/careers/addCareers
// http://localhost:3002/careers/updateCareers/:id
// http://localhost:3002/careers/deleteCareers/:id

// ✅ GET all careers
router.get("/", async (req, res) => {
  try {
    const data = await Careers.find();
    res.send({ data });
  } catch (error) {
    res.status(500).send({ message: "Error fetching careers", error });
  }
});

// ✅ ADD careers
router.post("/addCareers", async (req, res) => {
  try {
    const data = req.body;
    await Careers.create(data);
    res.send({ message: "Careers added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error adding careers", error });
  }
});

// ✅ DELETE careers
router.delete("/deleteCareers/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCareers = await Careers.findByIdAndDelete(id);

    if (!deletedCareers) {
      return res.status(404).send({ message: "Careers not found" });
    }

    res.send({ message: "Careers deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting careers", error });
  }
});

export default router;
