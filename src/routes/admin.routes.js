import { Router } from "express";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import { createSong, deleteSong } from "../controller/admin.controller.js";

const router = Router();

router.post("/songs", protectRoutes, requireAdmin, createSong);
router.delete("/songs/:id", protectRoutes, requireAdmin, deleteSong);

export default router;
