import { Contact } from "../../entities/contact.entity";
import AppDataSource from "../../data-source";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  await contactRepository.delete(id);

  return;
};

export default deleteContactService;
