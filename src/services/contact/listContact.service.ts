import { Contact } from "../../entities/contact.entity";
import AppDataSource from "../../data-source";

const listContactService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.find();

  return contact;
};

export default listContactService;
