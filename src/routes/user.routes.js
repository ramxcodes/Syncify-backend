import { Router } from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";

const router = Router();

router.get("/", protectRoutes, getAllUsers);

export default router;
