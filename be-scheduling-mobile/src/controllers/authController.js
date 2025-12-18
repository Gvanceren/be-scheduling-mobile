import { loginService } from "../services/authService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginService(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
