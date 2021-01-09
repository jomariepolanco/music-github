import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producer {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({length: 100})
    username: string;
    
    @Column({length: 100})
    password: string;
    
    @Column()
    name: string;
}