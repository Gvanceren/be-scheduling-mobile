import express from "express";
import authRoutes from "./routes/authRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import path from "path";
import profileRoutes from "./routes/profileRoutes.js";


const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);
pp.use("/uploads", express.static(path.resolve("uploads")));
app.use("/api/profile", profileRoutes);

export default app;


