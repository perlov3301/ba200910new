import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
@Entity("users") // table "users"
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;
    @Field()
    @Column("text")
    email: string;
// we don't want expose password
    @Column("text")
    password: string;
   
    @Column("int", { default: 0 })
    tokenVersion: number;
}
