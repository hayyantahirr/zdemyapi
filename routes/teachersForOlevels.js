import express from "express";
import TeachersForOlevels from "../model/TeachersForOlevels.js";

const router = express.Router();

// http://localhost:3002/teachers
// http://localhost:3002/teachers/addTeacherForOlevels
// http://localhost:3002/teachers/updateTeacherForOlevels/:id
// http://localhost:3002/teachers/deleteTeacherForOlevels/:id

// ✅ GET all teachers
router.get("/", async (req, res) => {
  try {
    const data = await TeachersForOlevels.find();
    res.send({ data });
  } catch (error) {
    res.status(500).send({ message: "Error fetching teachers", error });
  }
});

// ✅ ADD teacher
router.post("/addTeacherForOlevels", async (req, res) => {
  try {
    const data = req.body;
    await TeachersForOlevels.create(data);
    res.send({ message: "Teacher added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error adding teacher", error });
  }
});

// ✅ UPDATE teacher (using PUT for full updates)
router.put("/updateTeacherForOlevels/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTeacher = await TeachersForOlevels.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // returns the updated document
    );

    if (!updatedTeacher) {
      return res.status(404).send({ message: "Teacher not found" });
    }

    res.send({ message: "Teacher updated successfully", updatedTeacher });
  } catch (error) {
    res.status(500).send({ message: "Error updating teacher", error });
  }
});

// ✅ DELETE teacher
router.delete("/deleteTeacherForOlevels/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTeacher = await TeachersForOlevels.findByIdAndDelete(id);

    if (!deletedTeacher) {
      return res.status(404).send({ message: "Teacher not found" });
    }

    res.send({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting teacher", error });
  }
});

export default router;
