import express from "express";
import teachersForOlevels from "./teachersForOlevels.js";
import gallery from "./gallery.js";

const router = express.Router();

router.use("/teachersForOlevels", teachersForOlevels);
router.use("/gallery", gallery);
export default router;
