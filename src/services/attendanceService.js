import { AttendanceModel } from "../models/attendanceModel.js";

export const AttendanceService = {
  async checkIn(user_id) {
    const dateNow = new Date().toISOString().split("T")[0];
    const timeNow = new Date().toLocaleTimeString("id-ID", { hour12: false });

    const exist = await AttendanceModel.getTodayAttendance(user_id, dateNow);
    if (exist && exist.check_in)
      throw new Error("Anda sudah check-in hari ini");

    await AttendanceModel.checkIn(user_id, dateNow, timeNow);
    return { message: "Check-in berhasil" };
  },

  async checkOut(user_id) {
    const dateNow = new Date().toISOString().split("T")[0];
    const timeNow = new Date().toLocaleTimeString("id-ID", { hour12: false });

    const exist = await AttendanceModel.getTodayAttendance(user_id, dateNow);
    if (!exist || !exist.check_in)
      throw new Error("Anda belum check-in");

    if (exist.check_out)
      throw new Error("Anda sudah check-out hari ini");

    await AttendanceModel.checkOut(user_id, dateNow, timeNow);
    return { message: "Check-out berhasil" };
  },

  async history(user_id) {
    return await AttendanceModel.history(user_id);
  }
};
