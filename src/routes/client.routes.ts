import { Router } from "express";

import authToken from "../middlewares/authToken.middlewares";

import createClientController from "../controllers/client/createClient.controller";
import deleteClientController from "../controllers/client/deleteClient.controller";
import listClientController from "../controllers/client/listClient.controller";
import updateClientController from "../controllers/client/updateClient.controller";

const router = Router();

router.post("/client", createClientController);
router.get("/client", listClientController);
router.patch("/client", authToken, updateClientController);
router.delete("/client/:id", authToken, deleteClientController);

export default router;
