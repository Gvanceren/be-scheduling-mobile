import express from "express";
import {
  absensiMasuk,
  absensiPulang,
} from "../controllers/attendanceController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const router = express.Router();
router.post("/checkin", authMiddleware, absensiMasuk);
router.post("/checkout", authMiddleware, absensiPulang);

import { uploadFotoAbsensi } from "../controllers/attendanceController.js";

router.post(
  "/upload-foto",
  authMiddleware,
  uploadAbsensi.single("foto"),
  uploadFotoAbsensi
);

export default router;
