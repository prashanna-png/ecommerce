import express from "express";

import {
    addProducts,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProducts);

router.get("/:id", getProductById);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

export default router;