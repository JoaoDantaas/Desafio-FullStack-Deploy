import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IClientRequest } from "../../interfaces";
import { Client } from "../../entities/client.entitiy";
import bcrypt from "bcrypt";

const createClientService = async ({
  name,
  email,
  telephone,
  password,
}: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find();

  const emailAlreadyExists = clients.find((client) => client.email === email);
  const telephoneAlreadyExists = clients.find(
    (client) => client.telephone === telephone
  );

  if (emailAlreadyExists || telephoneAlreadyExists) {
    throw new AppError(400, "Client Already Exists");
  }

  const client = new Client();
  client.id;
  client.name = name;
  client.email = email;
  client.telephone = telephone;
  client.createdAt = new Date();
  client.password = bcrypt.hashSync(password, 10);
  // client.contact = await createContactService(contact);

  clientRepository.create(client);
  await clientRepository.save(client);

  return client;
};

export default createClientService;
