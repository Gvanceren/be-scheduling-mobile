import db from "../config/db.js";

export const checkIn = async (userId) => {
  const [result] = await db.query(
    `INSERT INTO absensi (user_id, tanggal, jam_masuk, status)
     VALUES (?, CURDATE(), CURTIME(), 'hadir')`,
    [userId]
  );
  return result.insertId;
};

export const checkOut = async (userId) => {
  await db.query(
    `UPDATE absensi
     SET jam_keluar = CURTIME()
     WHERE user_id = ? AND tanggal = CURDATE()`,
    [userId]
  );
};
