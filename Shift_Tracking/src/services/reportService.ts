
import { Workbook } from "exceljs";
import Shift from "../models/Shift";
import Employee from "../models/Employee";
import { Op } from "sequelize";

const generateReport = async () => {
  const shifts = await Shift.findAll({
    include: [{ model: Employee, attributes: ["name", "assignedShiftHours"] }],
    where: {
      endTime: {
        [Op.not]: null,
      },
    },
  });

  const reportData = shifts.map((shift) => {
    const actualHours = shift.getDataValue("actualHours");
    const employee = shift.getDataValue("Employee");
    const assignedHours = employee ? employee.assignedShiftHours : 0;
    return {
      employeeName: employee ? employee.name : "Unknown",
      actualHours,
      assignedHours,
      date: shift.getDataValue("startTime").toLocaleDateString(),
    };
  });

  return reportData;
};

const generateExcelReport = async (reportData: any[]) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("Report");

  worksheet.columns = [
    { header: "Employee Name", key: "employeeName", width: 20 },
    { header: "Actual Hours Worked", key: "actualHours", width: 20 },
    { header: "Assigned Shift Hours", key: "assignedHours", width: 20 },
    { header: "Date", key: "date", width: 15 },
  ];

  worksheet.addRows(reportData);

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
};

export { generateReport, generateExcelReport };
