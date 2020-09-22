import { Resolver, Query } from "type-graphql";
import { MyUser } from "./entity/MyUser";

@Resolver()
export class MyResolver{
  @Query(() => String ) 
  myhello() { return "my hello world" }

  @Query(() => [MyUser])
  myusers() { return MyUser.find(); }
}