import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Producer } from "../../entity/Producer";

export default class CreateProducers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Producer)
      .values([
        { username: "itsjomarie", password: "12345", name: "Jomarie" },
        { username: "applesauce", password: "12345", name: "Apple" },
        { username: "user1", password: "12345", name: "Mark" },
        { username: "user2", password: "12345", name: "Jenna" },
        { username: "user3", password: "12345", name: "Justine" },
        { username: "user4", password: "12345", name: "Brandon" },
        { username: "user5", password: "12345", name: "Dia" },
        { username: "user6", password: "12345", name: "Dillon" },
        { username: "user7", password: "12345", name: "Michael" },
        { username: "user8", password: "12345", name: "Tom" },
      ])
      .execute();
  }
}
