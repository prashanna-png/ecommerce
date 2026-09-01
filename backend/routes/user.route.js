import express from "express";

import {
  signup,
  login,
  logout,
  updateUser
} from "../controller/user.controller.js";

import { checkAuth, checkAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/:id", checkAuth, updateUser);

export default router;