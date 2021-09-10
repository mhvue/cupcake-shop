import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
//associate primary key from Customer with an order 
//many order to 1 customer
@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    customerName!: string;

    @Column()
    total!: number;

    @ManyToOne(
        () => Customer,
        customer => customer.orders,
        {
            onDelete:"CASCADE"  //when we delete customer, we delete all the orders as well via cascade 

        }
    )
    @JoinColumn({
        name: "customer_id"
    })
    customers?: Customer;
}