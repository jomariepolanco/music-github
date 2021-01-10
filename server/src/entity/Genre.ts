import { 
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Audio } from "./Audio";

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

 @OneToMany(type => Audio, audio => audio.genre)
 audios: Audio[];

}
