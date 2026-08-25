import express from "express";

import{
  getUser,
  addUsers,
  getUserById
}from "../controller/user.controller.js";

const router = express.Router();

router.get("/",getUser);
router.post("/",addUsers);
router.get("/:id",getUserById);

export default router;
