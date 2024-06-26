import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("Basket")
export class BasketEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable:false })
    name:string;

    @Column({ nullable:false })
    price_per_kilo:number;

    @Column({ nullable:false })
    img:string;

}