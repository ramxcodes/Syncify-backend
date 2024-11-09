import { Router } from "express";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import { createAlbum, createSong, deleteSong } from "../controller/admin.controller.js";

const router = Router();

router.post("/songs", protectRoutes, requireAdmin, createSong);
router.delete("/songs/:id", protectRoutes, requireAdmin, deleteSong);

router.post("/albums", protectRoutes, requireAdmin, createAlbum);


export default router;
