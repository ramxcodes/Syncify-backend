import { Router } from "express";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import { getAllSongs } from "../controller/song.controller.js";

const router = Router();

router.get("/", protectRoutes, requireAdmin, getAllSongs);

export default router;
