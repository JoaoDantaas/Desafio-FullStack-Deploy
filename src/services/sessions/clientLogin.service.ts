import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entitiy";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { IClientLogin } from "../../interfaces";

const clientLoginService = async ({ email, password }: IClientLogin) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find();

  const clientFind = clients.find((client) => client.email === email);

  if (!clientFind) {
    throw new AppError(403, "Wrong email/password");
  }
  if (!bcrypt.compareSync(password, clientFind.password)) {
    throw new AppError(403, "Wrong email/password");
  }
  const token = jwt.sign(
    { id: clientFind.id },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
    }
  );
  return token;
};

export default clientLoginService;
