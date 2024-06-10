
import Timesheet from "../models/Timesheet";
import { v4 as uuidv4 } from "uuid";

const createTimesheetEntry = async (
  employeeId: string,
  shiftId: string,
  projectName: string,
  taskName: string,
  fromDate: Date,
  toDate: Date
) => {
  const timesheet = await Timesheet.create({
    id: uuidv4(),
    employeeId,
    shiftId,
    projectName,
    taskName,
    fromDate,
    toDate,
  });
  return timesheet;
};

export { createTimesheetEntry };
