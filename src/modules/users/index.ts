import express from "express";
import User from "./schema"

const router = express.Router()

router.get('/', async (_, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: 'Users not found' });
    }
})

export default router;
