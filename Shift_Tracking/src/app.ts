
import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import shiftRoutes from "./routes/shiftRoutes";
import timesheetRoutes from "./routes/timesheetRoutes";
import reportRoutes from "./routes/reportRoutes";

const app = express();

app.use(bodyParser.json());

// Authentication routes
app.use("/api/auth", authRoutes);

// Shift management routes
app.use("/api/shifts", shiftRoutes);

// Timesheet management routes
app.use("/api/timesheets", timesheetRoutes);

// Report routes
app.use("/api/reports", reportRoutes);

export default app;
