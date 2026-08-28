import express from 'express';

import{
  login,
  signup,
  logout,
  updateUser
}from '../controller/user.controller.js';

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.put("/:id",updateUser);

export default router;
