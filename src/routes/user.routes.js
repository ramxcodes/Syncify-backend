import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  req.auth.userId;
  res.send("User Route with get");
});

export default router;
