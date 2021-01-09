import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Producer } from "./Producer";
import { Genre } from "./Genre";
import { Contribution } from "./Contribution";

@Entity()
export class Audio {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  track: string;

  @ManyToOne((type) => Producer, (producer) => producer.audios)
  producer: Producer;

  @ManyToOne((type) => Genre, (genre) => genre.audios)
  genre: Genre;

  @OneToMany((type) => Contribution, (contribution) => contribution.audio)
  contributions: Contribution[];
}
