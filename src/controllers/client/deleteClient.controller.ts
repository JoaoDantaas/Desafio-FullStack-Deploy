import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteClientService from "../../services/client/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const clientDeleted = await deleteClientService(id);

    return res.status(204).json(clientDeleted);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteClientController;
