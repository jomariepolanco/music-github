import { 
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Audio } from "./Audio";
import { Contribution } from "./Contribution";

@Entity()
export class Producer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column()
  name: string;

  @OneToMany((type) => Audio, (audio) => audio.producer)
  audios: Audio[];

  @OneToMany((type) => Contribution, (contribution) => contribution.producer)
  contributions: Contribution[];
}
