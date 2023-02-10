import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IClientLogin } from "../../interfaces";
import clientLoginService from "../../services/sessions/clientLogin.service";

const clientLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as IClientLogin;

    const token = await clientLoginService({ email, password });

    return res.status(200).json({ token: token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default clientLoginController;
