import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { ImagesSeed } from "../seeds/images.seed";

export class imagesMigrations1631211925816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
         const images = await getRepository("Image").save(ImagesSeed);
     
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
