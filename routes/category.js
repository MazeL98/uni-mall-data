import express from "express";
import { getCategory } from "../db/category.js";
const router = express.Router();

router.get("/app_category", (req, res) => {
    res.json(getCategory());
});

export default router;
