
import { Router } from "express";
import {
  getReportController,
  getExcelReportController,
} from "../controllers/reportController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/report", authMiddleware, getReportController);
router.get("/report/excel", authMiddleware, getExcelReportController);

export default router;
