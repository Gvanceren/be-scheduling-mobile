import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { AttendanceController } from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/check-in", authMiddleware, AttendanceController.checkIn);
router.post("/check-out", authMiddleware, AttendanceController.checkOut);
router.get("/history", authMiddleware, AttendanceController.history);

export default router;
