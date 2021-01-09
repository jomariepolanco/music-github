import { 
    Column, 
    Entity, 
    JoinColumn, 
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

  @Column({ 
    type: "boolean",
    default: null
  })
  isAccepted: boolean;

  @Column({
    type: "date"
  })
  date: Date;

  @ManyToOne((type) => Producer, (producer) => producer.contributions)
  @JoinColumn({name: 'producer_id'})
  producer: Producer;

  @ManyToOne((type) => Audio, (audio) => audio.contributions)
  @JoinColumn({name: "audio_id"})
  audio: Audio;
}
