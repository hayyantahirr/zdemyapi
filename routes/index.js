import express from "express";
import teachersForOlevels from "./teachersForOlevels.js";
import gallery from "./gallery.js";
import careers from "./careers.js";

const router = express.Router();

router.use("/teachersForOlevels", teachersForOlevels);
router.use("/gallery", gallery);
router.use("/careers", careers);
export default router;
