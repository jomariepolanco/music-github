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

@Entity('audios')
export class Audio extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  track: string;

  @ManyToOne((type) => Producer, (producer) => producer.audios)
  @JoinColumn()
  producer: Producer;

  @ManyToOne((type) => Genre, (genre) => genre.audios)
  @JoinColumn()
  genre: Genre;

  @OneToMany((type) => Contribution, (contribution) => contribution.audio)
  contributions: Contribution[];

}
