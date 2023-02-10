import { Router } from "express";

import clientLoginController from "../controllers/sessions/clientLogin.controller";

const router = Router();

router.post("/login", clientLoginController);

export default router;
