import pool from "../index.js";

/**
 * ABSEN MASUK
 */
export const absenMasuk = async (req, res) => {
  try {
    const userId = req.user.id; // dari JWT
    const today = new Date().toISOString().slice(0, 10);

    await pool.query(
      `INSERT INTO absensi (user_id, tanggal, jam_masuk, status)
       VALUES (?, ?, CURTIME(), 'hadir')`,
      [userId, today]
    );

    res.json({ message: "Absen masuk berhasil" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * ABSEN PULANG
 */
export const absenPulang = async (req, res) => {
  try {
    const userId = req.user.id;
    const today = new Date().toISOString().slice(0, 10);

    await pool.query(
      `UPDATE absensi 
       SET jam_keluar = CURTIME()
       WHERE user_id = ? AND tanggal = ?`,
      [userId, today]
    );

    res.json({ message: "Absen pulang berhasil" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * UPLOAD FOTO ABSENSI
 */
export const uploadFotoAbsensi = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Foto wajib diupload" });
    }

    res.json({
      message: "Foto absensi berhasil diupload",
      file: req.file.filename,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
