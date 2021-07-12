import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateData1626112396735 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: 'id',
          isPrimary: true,
          type: 'uuid'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'category',
          type: 'varchar'
        },
        {
          name: 'quantity',
          type: 'varchar'
        },
        {
          name: 'price',
          type: 'double'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products')
  }

}
