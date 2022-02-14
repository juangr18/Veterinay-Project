import express from "express";
import petController from "../controller/petController.js";

const router = express.Router();
// http://localhost:4000/api/pet/registerPet
router.post("/registerPet", petController.registerPet);

export default router;