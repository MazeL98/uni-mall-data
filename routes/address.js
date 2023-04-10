import express from "express";
import {
    getAddress,
    addAddress,
    editAddress,
    deleteAddress,
} from "../db/addresss.js";
const router = express.Router();

router.get("/useraddress", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(getAddress(req));
});

router.post("/newaddress", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(addAddress(req));
});

router.post("/useraddress/:id", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(editAddress(req));
});

router.delete("/useraddress/:id", (req, res) => {
    if (!req.headers.token) {
        return res.status(401).json({
            msg: "非法token，请登录后重试",
        });
    }
    res.json(deleteAddress(req));
});

export default router;
