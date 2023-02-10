import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675715658240 implements MigrationInterface {
    name = 'createTables1675715658240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" ADD "clientId" uuid`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD CONSTRAINT "FK_5fd03e19b188ee73637086b3657" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" DROP CONSTRAINT "FK_5fd03e19b188ee73637086b3657"`);
        await queryRunner.query(`ALTER TABLE "Contact" DROP COLUMN "clientId"`);
    }

}
