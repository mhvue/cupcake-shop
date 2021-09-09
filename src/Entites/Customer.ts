import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
//associate orders with a customer 
//a customer can have any orders 
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
}