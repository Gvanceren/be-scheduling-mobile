import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/absensi");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `absen-${Date.now()}${ext}`);
  },
});

export const uploadAbsensi = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
