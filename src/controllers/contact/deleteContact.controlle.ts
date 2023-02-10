import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteContactService from "../../services/contact/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const contactDeleted = await deleteContactService(id);

    return res.status(204).json(contactDeleted);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteContactController;
