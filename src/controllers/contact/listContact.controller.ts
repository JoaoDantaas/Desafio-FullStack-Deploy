import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import listContactService from "../../services/contact/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  try {
    const contacts = await listContactService();

    return res.status(200).json(contacts);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listContactController;
