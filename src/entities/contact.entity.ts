import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Client } from "./client.entitiy";

@Entity("Contact")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  telephone!: string;

  @Column({ type: "date" })
  createdAt!: Date;

  @ManyToOne((type) => Client)
  client?: Client;
}
