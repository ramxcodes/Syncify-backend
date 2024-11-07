import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Auth Route with get')
})

export default router;