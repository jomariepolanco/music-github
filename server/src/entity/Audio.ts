import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Producer } from "./Producer";
import { Genre } from "./Genre";
import { Contribution } from "./Contribution";

@Entity()
export class Audio extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  track: string;

  @ManyToOne((type) => Producer, (producer) => producer.audios)
  @JoinColumn({name: 'producer_id'})
  producer: Producer;

  @ManyToOne((type) => Genre, (genre) => genre.audios)
  @JoinColumn({name: 'genre_id'})
  genre: Genre;

  @OneToMany((type) => Contribution, (contribution) => contribution.audio)
  contributions: Contribution[];

}
