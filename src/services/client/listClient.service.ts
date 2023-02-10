import { Client } from "../../entities/client.entitiy";
import AppDataSource from "../../data-source";

const listClientService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.find();

  return client;
};

export default listClientService;
