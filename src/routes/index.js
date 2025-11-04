import express from "express";
import authRoutes from "./authRoutes.js";
import attendanceRoutes from "./attendanceRoutes.js";
import profileRoutes from "./profileRoutes.js";

export const router = express.Router();

router.use("/auth", authRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/profile", profileRoutes);
