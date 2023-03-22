import express from "express";
import { getComments, getGoods } from "../db/goods.js";
const router = express.Router();

// 获取首页目录+首屏数据
router.get("/:id", (req, res) => {
    res.json(getGoods(req.params.id));
});

// 获取其它目录页的数据
router.get("/:id/comments", (req, res) => {
    res.json(getComments(req.params.id));
});

export default router;
