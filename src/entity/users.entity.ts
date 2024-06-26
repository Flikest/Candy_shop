import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable:false })
    nick_name:string

    @Column({ nullable:true })
    gmail:string
}