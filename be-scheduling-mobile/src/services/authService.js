import bcrypt from "bcrypt";
import { findUserByEmail } from "../models/userModel.js";
import { generateToken } from "../utils/jwt.js";

export const loginService = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User tidak ditemukan");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Password salah");

  const token = generateToken({
    id: user.id,
    role: user.nama_role,
    login_type: user.login_type,
  });

  delete user.password;

  return { token, user };
};
