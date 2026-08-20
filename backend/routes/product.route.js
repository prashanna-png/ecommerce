import express from "express";

import {
    addProducts,
    getProductById,
    getProducts
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProducts);

router.get("/:id", getProductById);

export default router;