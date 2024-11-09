import { Router } from "express";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import { createSong } from "../controller/admin.controller.js";

const router = Router();

router.post("/songs", protectRoutes, requireAdmin, createSong);

export default router;
