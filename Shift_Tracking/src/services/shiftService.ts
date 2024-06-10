
import Shift from "../models/Shift";
import { v4 as uuidv4 } from "uuid";

const startShift = async (employeeId: string) => {
  const shift = await Shift.create({
    id: uuidv4(),
    employeeId,
    startTime: new Date(),
  });
  return shift;
};

const endShift = async (shiftId: string) => {
  const shift = await Shift.findByPk(shiftId);

  if (!shift) {
    throw new Error("Shift not found");
  }

  shift.endTime = new Date();
  const duration =
    (shift.endTime.getTime() - shift.startTime.getTime()) / (1000 * 60 * 60); // in hours
  shift.actualHours = duration;
  await shift.save();
  return shift;
};

export { startShift, endShift };
