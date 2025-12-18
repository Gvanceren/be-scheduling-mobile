import db from "../config/db.js";

export const findUserByEmail = async (email) => {
  const [rows] = await db.query(
    `SELECT users.*, roles.nama_role
     FROM users
     JOIN roles ON users.id_role = roles.id
     WHERE email = ? AND status = 'aktif'`,
    [email]
  );
  return rows[0];
};
