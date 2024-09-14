import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePostsTable1687378112345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Cập nhật bảng `posts` để thêm cột `is_main`
    await queryRunner.query(`
      ALTER TABLE \`posts\`
      ADD \`is_main\` tinyint NOT NULL DEFAULT 0
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Khôi phục bảng `posts` bằng cách xóa cột `is_main`
    await queryRunner.query(`
      ALTER TABLE \`posts\`
      DROP COLUMN \`is_main\`
    `);
  }
}
