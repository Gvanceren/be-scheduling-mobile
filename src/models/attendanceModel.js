import { db } from "../config/db.js";

export const AttendanceModel = {
  async getTodayAttendance(user_id, dateNow) {
    const [rows] = await db.query(
      "SELECT * FROM attendance WHERE user_id = ? AND date = ?",
      [user_id, dateNow]
    );
    return rows[0];
  },

  async checkIn(user_id, dateNow, timeNow) {
    await db.query(
      "INSERT INTO attendance (user_id, date, check_in) VALUES (?, ?, ?)",
      [user_id, dateNow, timeNow]
    );
  },

  async checkOut(user_id, dateNow, timeNow) {
    await db.query(
      "UPDATE attendance SET check_out = ? WHERE user_id = ? AND date = ?",
      [timeNow, user_id, dateNow]
    );
  },

  async history(user_id) {
    const [rows] = await db.query(
      "SELECT * FROM attendance WHERE user_id = ? ORDER BY date DESC",
      [user_id]
    );
    return rows;
  }
};
