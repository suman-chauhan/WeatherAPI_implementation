import express from "express";
import { insertData } from "../controllers/index.js";
const router = express.Router();

router.post("/insertdata", insertData);

export default router;
