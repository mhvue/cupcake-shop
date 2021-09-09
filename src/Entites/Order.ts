import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToMany } from "typeorm";
//associate primary key from Customer with an order 
//1 order to 1 customer
@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    customerName!: string;

    @Column()
    total!: number;
}