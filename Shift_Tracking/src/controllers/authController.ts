
import { Request, Response } from "express";
import { login } from "../services/authService";

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, employee } = await login(email, password);
    res.json({ token, employee });
  } catch (error: any) {
    if (error instanceof Error) {
     
      res.status(401).json({ message: error.message });
    } else {
      
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export { loginController };
