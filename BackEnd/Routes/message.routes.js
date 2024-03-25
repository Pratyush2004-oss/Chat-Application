import express from "express";
import { sendMessage, getMessage } from "../Controller/message.controller.js";
import protectRoute from "../Middleware/protextroute.js";

const router = express.Router()

router.get('/:id', protectRoute, getMessage)
router.post("/send/:id", protectRoute, sendMessage)

export default router;