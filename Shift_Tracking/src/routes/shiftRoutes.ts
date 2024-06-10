
import { Router } from "express";
import {
  startShiftController,
  endShiftController,
} from "../controllers/shiftController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/start", authMiddleware, startShiftController);
router.post("/end", authMiddleware, endShiftController);

export default router;
