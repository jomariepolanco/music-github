import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Audio } from "../../entity/Audio";

export default class CreateAudios implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Audio)
      .values([
        {producer: , genre:, title:, track:}
      ])
      .execute();
  }
}
