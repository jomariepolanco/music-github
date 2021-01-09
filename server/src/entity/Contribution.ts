import { 
    Column, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Audio } from "./Audio";
import { Producer } from "./Producer";

@Entity()
export class Contribution {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  comment: string;

  @Column()
  track: string;

  @Column()
  isAccepted: boolean;

  @Column()
  date: Date;

  @ManyToOne((type) => Producer, (producer) => producer.contributions)
  producer: Producer;

  @ManyToOne((type) => Audio, (audio) => audio.contributions)
  audio: Audio;
}
