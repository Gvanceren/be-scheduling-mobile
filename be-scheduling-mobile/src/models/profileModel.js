 import db from "../config/db.js";

export const getProfileById = async (userId) => {
  const [rows] = await db.query(
    `SELECT id, nama, email, no_hp, jabatan, foto_profil
     FROM users WHERE id = ?`,
    [userId]
  );
  return rows[0];
};

export const updateProfile = async (userId, data) => {
  const { nama, no_hp, jabatan } = data;

  await db.query(
    `UPDATE users SET nama=?, no_hp=?, jabatan=? WHERE id=?`,
    [nama, no_hp, jabatan, userId]
  );
};
