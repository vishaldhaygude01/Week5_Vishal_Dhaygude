
import express from "express";
import { createTimesheetEntryController } from "../controllers/timesheetController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/timesheets", authMiddleware, createTimesheetEntryController);

export default router;
