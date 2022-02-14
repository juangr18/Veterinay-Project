import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();
// http://localhost:4000/api/user/registerUser
router.post("/registerUser", userController.registerUser);

export default router;
