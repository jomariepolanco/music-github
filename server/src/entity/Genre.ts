import { 
  BaseEntity,
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Audio } from "./Audio";

@Entity('genres')
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

 @OneToMany(type => Audio, audio => audio.genre)
 audios: Audio[];

}
