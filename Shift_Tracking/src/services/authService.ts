
import bcrypt from "bcryptjs";
import Employee from "../models/Employee";
import { generateToken } from "../utils/jwt";

const login = async (email: string, password: string) => {
  const employee = await Employee.findOne({ where: { email } });

  if (!employee) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, employee.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(employee.id, employee.role);
  return { token, employee };
};

export { login };
