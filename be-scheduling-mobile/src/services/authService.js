import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";
import { env } from "../config/env.js";

export const AuthService = {
  async login(email, password) {
    const user = await UserModel.findByEmail(email);
    if (!user) throw new Error("Email tidak terdaftar");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Password salah");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      env.jwt_secret,
      { expiresIn: "1d" }
    );

    return { token, user };
  },

  async register(data) {
    const hashed = await bcrypt.hash(data.password, 10);
    return await UserModel.createUser({ ...data, password: hashed });
  }
};
