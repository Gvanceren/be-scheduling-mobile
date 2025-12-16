import { AuthService } from "../services/authService.js";

export const AuthController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  register: async (req, res) => {
    try {
      const id = await AuthService.register(req.body);
      res.json({ message: "Registrasi berhasil", id });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
