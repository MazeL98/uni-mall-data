import express from "express";
import {
    getCartList,
    updateNum,
    getSku,
    addToCart,
    deleteItem,
} from "../db/cart.js";
const router = express.Router();

// 获取当下购物车列表
router.get("/", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(getCartList(req));
});

// 在编辑某商品sku前获取该商品全部sku
router.get("/:id/sku", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(getSku(req));
});

// 更改购物车中某商品数量
router.post("/updatenumber/:id", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(updateNum(req));
});

// 将商品加入购物车
router.post("/new", (req, res) => {
    if (!req.headers.token) {
        res.statusCode = 401;
        return res.json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(addToCart(req));
});

// 删除商品
router.post("/delete", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(deleteItem(req));
});

export default router;
