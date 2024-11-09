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

// Admin Middleware for all routes
router.use(protectRoutes, requireAdmin)

// Check Admin
router.get("/check", checkAdmin);

// Songs Routes
router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

// Album Routes
router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;
