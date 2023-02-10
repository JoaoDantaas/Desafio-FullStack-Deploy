import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listProfileService from "../../services/profile/listProfile.service";

const listProfileController = async (req: Request, res: Response) => {
  const id: string = req.client.id;

  const profile = await listProfileService(id);

  return res.status(200).json(instanceToPlain(profile));
};

export default listProfileController;
