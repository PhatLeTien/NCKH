import { MigrationInterface, QueryRunner } from "typeorm";

export class EditCateogry1727254297539 implements MigrationInterface {
    name = 'EditCateogry1727254297539'

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`categoryName\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`DROP TABLE \`categories\``);
       
    }

}
