import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import clientRoutes from "./routes/client.routes";
import contactRoutes from "./routes/contact.routes";
import sessionRoutes from "./routes/session.routes";
import profileRoutes from "./routes/profile.routes";

const app = express();

app.use(express.json());

app.use(clientRoutes);
app.use(contactRoutes);
app.use(sessionRoutes);
app.use(profileRoutes);

app.use(handleErrorMiddleware);

export default app;
