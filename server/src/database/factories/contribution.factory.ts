import { define, factory } from "typeorm-seeding";
import * as Faker from "faker";
import { Contribution } from "../../entity/Contribution";
import { Audio } from "../../entity/Audio";
import { Producer } from "../../entity/Producer";
import { createQueryBuilder, getConnection, QueryBuilder } from "typeorm";

define(Contribution, (faker: typeof Faker) => {
  const comment = faker.lorem.sentences();
  const isAccepted = false;
  const date = new Date();
  const track =
    "https://download-files.wixmp.com/temp/extend/smusic/7fe256_cd16578eb84647ee9ae9ae911a104f24.mp3/170229233.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YXBwOmU2NjYzMGU3MTRmMDQ5MGFhZWExZjE0OWIzYjY5ZTMyIiwic3ViIjoidXJuOmFwcDplNjY2MzBlNzE0ZjA0OTBhYWVhMWYxNDliM2I2OWUzMiIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sImlhdCI6MTYxMDIyOTIyNSwiZXhwIjoxNjEwNDg4NDM1LCJqdGkiOiI0M2E5OThjZWZkMDMiLCJvYmoiOltbeyJwYXRoIjoiL3RlbXAvZXh0ZW5kL3NtdXNpYy83ZmUyNTZfY2QxNjU3OGViODQ2NDdlZTlhZTlhZTkxMWExMDRmMjQubXAzLzE3MDIyOTIzMy5tcDMifV1dfQ.ZPhuQOZToGhImE3KdZwFtBZQ5_oE2Q3DiiSVtZ2gESY&filename=Musway+Studio+-+011-2+-+Brave+Parade.mp3";

  const contribution = new Contribution();
  contribution.comment = comment;
  contribution.track = track;
  contribution.date = date;
  return contribution;
});
