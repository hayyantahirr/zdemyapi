import express from "express";
import teachersForOlevels from "./teachersForOlevels.js";


const router = express.Router();

router.use("/teachersForOlevels", teachersForOlevels);

export default router;
