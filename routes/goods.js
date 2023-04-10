import express from "express";
import { getComments, getGoods, searchGoods, getHotList } from "../db/goods.js";
const router = express.Router();
// 获取热门推荐列表
router.get("/recomlist", (req, res) => {
    console.log("路由没问题");
    res.json(getHotList());
});
// 获取商品详情数据
router.get("/:id", (req, res) => {
    res.json(getGoods(req.params.id));
});

// 获取商品评论
router.get("/:id/comments/:type", (req, res) => {
    res.json(getComments(req.params.id, req.params.type));
});

// 搜索商品
router.post("/search", (req, res) => {
    res.json(searchGoods(req));
});

export default router;
