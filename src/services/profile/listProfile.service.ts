import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entitiy";

const listProfileService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientFind = await clientRepository.findOneBy({
    id: id,
  });

  return clientFind;
};

export default listProfileService;
