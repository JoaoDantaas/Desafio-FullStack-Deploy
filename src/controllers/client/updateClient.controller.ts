import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../errors/appError";
import { IClientUpdate } from "../../interfaces";
import updateClientService from "../../services/client/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  try {
    const client: IClientUpdate = req.body;
    const id: string = req.client.id;

    const clientUpdate = await updateClientService(client, id);

    return res.status(200).json(instanceToPlain(clientUpdate));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateClientController;
