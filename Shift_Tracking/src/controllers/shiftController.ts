
import { Request, Response } from "express";
import { startShift, endShift } from "../services/shiftService";

const startShiftController = async (req: Request, res: Response) => {
  try {
    const employeeId = req.employee?.id; 
    if (!employeeId) {
      throw new Error("Employee not found in request");
    }
    const shift = await startShift(employeeId);
    res.status(201).json(shift);
  } catch (error: any) {
  
    res.status(500).json({ message: error.message });
  }
};

const endShiftController = async (req: Request, res: Response) => {
  try {
    const { shiftId } = req.body;
    const shift = await endShift(shiftId);
    res.status(200).json(shift);
  } catch (error: any) {
    
    res.status(500).json({ message: error.message });
  }
};

export { startShiftController, endShiftController };
