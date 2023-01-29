import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNicknameColumnToCatTable1674983653484 implements MigrationInterface {
    name = 'AddNicknameColumnToCatTable1674983653484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" ADD "nickname" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "nickname"`);
    }

}
