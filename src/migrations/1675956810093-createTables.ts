import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675956810093 implements MigrationInterface {
    name = 'createTables1675956810093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Client" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Client" DROP COLUMN "password"`);
    }

}
