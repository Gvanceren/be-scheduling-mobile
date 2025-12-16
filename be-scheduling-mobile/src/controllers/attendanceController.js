import { AttendanceService } from "../services/attendanceService.js";

export const AttendanceController = {
  checkIn: async (req, res) => {
    try {
      const result = await AttendanceService.checkIn(req.user.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  checkOut: async (req, res) => {
    try {
      const result = await AttendanceService.checkOut(req.user.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  history: async (req, res) => {
    try {
      const result = await AttendanceService.history(req.user.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
