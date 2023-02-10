import { IContactUpdate } from "../../interfaces/index";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const updateContactService = async (
  contactBody: IContactUpdate,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id,
  });

  await contactRepository.update(id, {
    name: contactBody.name ? contactBody.name : contact!.name,
    email: contactBody.email ? contactBody.email : contact!.email,
    telephone: contactBody.telephone
      ? contactBody.telephone
      : contact!.telephone,
  });

  const contactUpdate = await contactRepository.findOneBy({
    id,
  });
  return contactUpdate;
};

export default updateContactService;
