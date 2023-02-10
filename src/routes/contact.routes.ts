import { Router } from "express";

import authToken from "../middlewares/authToken.middlewares";

import createContactController from "../controllers/contact/createContact.controller";
import deleteContactController from "../controllers/contact/deleteContact.controlle";
import listContactController from "../controllers/contact/listContact.controller";
import updateContactController from "../controllers/contact/updateContact.controlle";

const router = Router();

router.get("/contact", listContactController);
router.post("/contact", authToken, createContactController);
router.patch("/contact/:id", authToken, updateContactController);
router.delete("/contact/:id", authToken, deleteContactController);

export default router;
