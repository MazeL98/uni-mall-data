import express from "express";
import {
    getCouponList,
    addCoupon,
    getUserCoupon,
    getUserCouponCount,
    useCoupon,
} from "../db/coupon.js";

const router = express.Router();

// 获取所有优惠券列表
router.get("/", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(getCouponList(req));
});

// 领取优惠券
router.post("/getcoupon/:id", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(addCoupon(req));
});

// 获取当前用户的优惠券列表
router.get("/usercoupon/:isvalid", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(getUserCoupon(req));
});

// 获取可用优惠券数量
router.post("/coupon_count", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(getUserCouponCount(req));
});

// 使用优惠券
router.post("/usecoupon/:id", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(useCoupon(req));
});
export default router;
