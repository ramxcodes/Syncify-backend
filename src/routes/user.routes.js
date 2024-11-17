import { Router } from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import { getAllUsers, getMessages } from "../controller/user.controller.js";
const router = Router();

router.get("/", protectRoutes, getAllUsers);
router.get("/messages/:userId", protectRoutes, getMessages);

export default router;