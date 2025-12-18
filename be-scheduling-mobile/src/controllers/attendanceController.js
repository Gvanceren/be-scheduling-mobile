import { checkIn, checkOut } from "../models/attendanceModel.js";
import { saveFotoAbsensi } from "../models/fotoAbsensiModel.js";

export const absensiMasuk = async (req, res) => {
  try {
    const id = await checkIn(req.user.id);
    res.json({ message: "Absen masuk berhasil", id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const absensiPulang = async (req, res) => {
  try {
    await checkOut(req.user.id);
    res.json({ message: "Absen pulang berhasil" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const uploadFotoAbsensi = async (req, res) => {
  try {
    const { absensi_id } = req.body;
    const fileUrl = `/uploads/absensi/${req.file.filename}`;

    await saveFotoAbsensi(absensi_id, fileUrl);

    res.json({
      message: "Foto absensi berhasil diupload",
      file_url: fileUrl,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
