import express from "express";
import {
    makeOrder,
    payForOrder,
    getOrderDetail,
    getOrderList,
    deleteOrder,
    refundGoods,
} from "../db/order.js";
const router = express.Router();

router.post("/", (req, res) => {
    console.log("路由无误");
    if (!req.body.address_id) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else if (!req.body.goodsIdList) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else if (!req.body.final_price) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else {
        console.log("参数无误");
        res.json(makeOrder(req));
    }
});

router.post("/payment/:id/:type", (req, res) => {
    if (!req.params.id) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else if (!req.params.type) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else {
        console.log("参数无误");
        res.json(payForOrder(req));
    }
});
router.get("/:id", (req, res) => {
    if (!req.params.id) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else {
        console.log("参数无误");
        res.json(getOrderDetail(req));
    }
});

router.get("/list/:type", (req, res) => {
    if (!req.params.type) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else {
        console.log("参数无误");
        res.json(getOrderList(req));
    }
});

router.post("/closeorder/:id", (req, res) => {
    if (!req.headers.token) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else if (!req.params.id) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else {
        console.log("参数无误");
        res.json(deleteOrder(req));
    }
});

router.post("/:id/apply_refund", (req, res) => {
    if (!req.headers.token) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else if (!req.params.id) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else if (!req.body.reason) {
        return res.status(50021).json({
            msg: "失败，请求参数错误",
            data: false,
        });
    } else {
        console.log("参数无误");
        res.json(deleteOrder(req));
    }
});
export default router;
