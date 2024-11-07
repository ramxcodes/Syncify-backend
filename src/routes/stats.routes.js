import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Stats Route with get')
})

export default router;