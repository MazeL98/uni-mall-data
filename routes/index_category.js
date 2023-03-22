import express from "express";
import { getIndexData, getOtherData } from "../db/index_category.js";
const router = express.Router();

// 获取首页目录+首屏数据
router.get("/data", (req, res) => {
    res.json(getIndexData());
});

// 获取其它目录页的数据
router.get("/:id/data/:page", (req, res) => {
    res.json(getOtherData(req.params.id, req.params.page));
});

export default router;
