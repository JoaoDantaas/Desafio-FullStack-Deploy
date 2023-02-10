import { Router } from "express";

import listProfileController from "../controllers/profile/listProfile.controller";
import authToken from "../middlewares/authToken.middlewares";

const router = Router();

router.get("/profile", authToken, listProfileController);

export default router;
