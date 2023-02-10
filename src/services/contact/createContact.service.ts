import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces";
import { Contact } from "../../entities/contact.entity";
import { Client } from "../../entities/client.entitiy";

const createContactService = async (
  { name, email, telephone }: IContactRequest,
  id: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({
    id: id,
  });

  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();

  const emailAlreadyExists = contacts.find((c) => c.email === email);
  const telephoneAlreadyExists = contacts.find(
    (c) => c.telephone === telephone
  );

  if (emailAlreadyExists || telephoneAlreadyExists) {
    throw new AppError(400, "Contact Already Exists");
  }
  const contact = new Contact();
  contact.id;
  contact.name = name;
  contact.telephone = telephone;
  contact.email = email;
  contact.createdAt = new Date();
  contact.client = client!;

  contactRepository.create(contact);
  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
