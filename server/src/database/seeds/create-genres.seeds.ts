import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Genre } from "../../entity/Genre";

export default class CreateGenres implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Genre)
      .values([
        { name: "Hip-hop" },
        { name: "Rap" },
        { name: "Techno" },
        { name: "R&B" },
        { name: "Punk" },
        { name: "Alernative Rock" },
        { name: "Rock" },
        { name: "House" },
        { name: "EDM" },
        { name: "Country" },
        { name: "Indie Rock" },
        { name: "Latin" },
        { name: "Pop" },
      ])
      .execute();
  }
}
