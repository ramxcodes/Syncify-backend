import { Router } from "express";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controller/admin.controller.js";

const router = Router();

router.get("/check", protectRoutes, requireAdmin, checkAdmin);

router.post("/songs", protectRoutes, requireAdmin, createSong);
router.delete("/songs/:id", protectRoutes, requireAdmin, deleteSong);

router.post("/albums", protectRoutes, requireAdmin, createAlbum);
router.delete("/albums/:id", protectRoutes, requireAdmin, deleteAlbum);

export default router;
