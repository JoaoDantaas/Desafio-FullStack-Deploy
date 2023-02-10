import { Client } from "../../entities/client.entitiy";
import AppDataSource from "../../data-source";

const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  await clientRepository.delete(id);

  return;
};

export default deleteClientService;
