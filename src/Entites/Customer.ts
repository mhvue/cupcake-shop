import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Order } from "./Order";
//associate orders with a customer 
//a customer can have many orders 
@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @OneToMany( 
        () => Order, 
        order => order.customers
    )
    orders?: Order[];
}