import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../errors/appError";
import { IContactUpdate } from "../../interfaces";
import updateContactService from "../../services/contact/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  try {
    const contact: IContactUpdate = req.body;
    const id: string = req.params.id;

    const contactUpdate = await updateContactService(contact, id);

    return res.status(200).json(contactUpdate);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateContactController;
