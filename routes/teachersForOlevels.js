import express from "express";
import TeachersForOlevels from "../model/TeachersForOlevels.js";
const router = express.Router();
// http://localhost:3002/teachers
// http://localhost:3002/teachers/addTeacher
// // http://localhost:3002/teachers/updateTeacher
// // http://localhost:3002/teachers/deleteTeacher
router.get("/", async (req, res) => {
  const data = await TeachersForOlevels.find();
  res.send({ data });
});

router.post("/addTeacherForOlevels", async (req, res) => {
  const data = req.body;
  await TeachersForOlevels.create(data);
  res.send({ message: "TeachersForOlevels added successfull" });
  
});

router.put("/updateTeacherForOlevels", (req, res) => {
  res.send({ message: "TeachersForOlevels updated successfully" });
});

router.delete("/deleteTeacherForOlevels", (req, res) => {
  res.send({ message: "TeachersForOlevels deleted successfully" });
});

export default router;
