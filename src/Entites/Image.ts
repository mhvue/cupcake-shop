import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    picText!: string;

    @Column()
    cupcakeName!: string;

    @Column()
    description!: string;

    @Column()
    cost!: number
}