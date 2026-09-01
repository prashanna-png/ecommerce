import express from "express";

import { getOrders, addOrder } from "../controller/order.controller.js";

import { checkAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", checkAuth, getOrders);

router.post("/", checkAuth, addOrder);

export default router;
