import { Router } from "express";
import profileRoutes from "./profileRoutes.js";

const router = Router();

router.use("/profile", profileRoutes);

export default router;
