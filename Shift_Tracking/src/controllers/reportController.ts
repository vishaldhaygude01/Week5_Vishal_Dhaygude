
import { Request, Response } from "express";
import { generateReport, generateExcelReport } from "../services/reportService";

const getReportController = async (req: Request, res: Response) => {
  try {
    const reportData = await generateReport();
    res.status(200).json(reportData);
  } catch (error: any) {

    res.status(500).json({ message: error.message });
  }
};

const getExcelReportController = async (req: Request, res: Response) => {
  try {
    const reportData = await generateReport();
    const buffer = await generateExcelReport(reportData);

   
    res.setHeader("Content-Disposition", 'attachment; filename="report.xlsx"');
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.send(buffer);
  } catch (error: any) {
    
    res.status(500).json({ message: error.message });
  }
};

export { getReportController, getExcelReportController };
