import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Songs Route with get')
})

export default router;