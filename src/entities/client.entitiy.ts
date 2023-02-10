import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";
import { Exclude } from "class-transformer";

@Entity("Client")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  @Exclude()
  password!: string;

  @Column({ unique: true })
  telephone!: string;

  @Column({ type: "date" })
  createdAt!: Date;

  @OneToMany((type) => Contact, (contact) => contact.client, {
    eager: true,
  })
  contact?: Contact[];
}
