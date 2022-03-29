import express from "express";
import { getData } from "../controllers/index.js";
const router = express.Router();

router.get("/getdata", getData);

export default router;
