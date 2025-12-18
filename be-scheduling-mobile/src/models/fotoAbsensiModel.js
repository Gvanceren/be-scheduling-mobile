import db from "../config/db.js";

export const saveFotoAbsensi = async (absensiId, fileUrl) => {
  await db.query(
    `INSERT INTO foto_absensi (absensi_id, file_url, taken_at)
     VALUES (?, ?, NOW())`,
    [absensiId, fileUrl]
  );
};
