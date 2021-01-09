import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Contribution } from "../../entity/Contribution";

export default class CreateContributions implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await factory(Contribution)().createMany(10)
    }
}