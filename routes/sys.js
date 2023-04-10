import express from "express";
import { login } from "../db/sys.js";
const router = express.Router();

// 登录
router.post("/login", (req, res) => {
    let loginRes = login(req);
    if (!loginRes.data) {
        res.statusCode = 909;
        res.json(loginRes);
    } else {
        res.json(loginRes);
    }
});

export default router;
