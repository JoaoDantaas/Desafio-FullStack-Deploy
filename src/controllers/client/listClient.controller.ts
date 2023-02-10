import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../errors/appError";
import listClientService from "../../services/client/listClient.service";

const listClientController = async (req: Request, res: Response) => {
  try {
    const clients = await listClientService();

    return res.status(200).json(instanceToPlain(clients));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listClientController;
