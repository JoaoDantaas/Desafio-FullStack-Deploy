import { Client } from "../../entities/client.entitiy";
import { IClientUpdate } from "../../interfaces/index";
import AppDataSource from "../../data-source";
import { hash } from "bcrypt";

const updateClientService = async (clientBody: IClientUpdate, id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id,
  });

  await clientRepository.update(id, {
    name: clientBody.name ? clientBody.name : client!.name,
    email: clientBody.email ? clientBody.email : client!.email,
    telephone: clientBody.telephone ? clientBody.telephone : client!.telephone,
    password: clientBody.password
      ? await hash(clientBody.password, 10)
      : client!.password,
  });

  const clientUpdate = await clientRepository.findOneBy({
    id,
  });
  return clientUpdate;
};

export default updateClientService;
