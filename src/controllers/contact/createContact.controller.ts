import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces";
import createContactService from "../../services/contact/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  try {
    const { name, email, telephone } = req.body as IContactRequest;
    const id: string = req.client.id;

    const newContact = await createContactService(
      { name, email, telephone },
      id
    );
    delete newContact.client;

    return res.status(201).json(newContact);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createContactController;
