import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IClientRequest } from "../../interfaces";
import createClientService from "../../services/client/createClient.service";
import { instanceToPlain } from "class-transformer";

const createClientController = async (req: Request, res: Response) => {
  try {
    const { name, email, telephone, password } = req.body as IClientRequest;

    const newClient = await createClientService({
      name,
      email,
      telephone,
      password,
    });

    return res.status(201).json(instanceToPlain(newClient));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createClientController;
