import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { uploadAbsensi } from "../middlewares/uploadAbsensi.js";
import {
  absenMasuk,
  absenPulang,
  uploadFotoAbsensi,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/masuk", authMiddleware, absenMasuk);
router.post("/pulang", authMiddleware, absenPulang);

router.post(
  "/upload-foto",
  authMiddleware,
  uploadAbsensi.single("foto"),
  uploadFotoAbsensi
);

export default router;
