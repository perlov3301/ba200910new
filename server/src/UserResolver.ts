import { Resolver, Query, Mutation, Arg, ObjectType, Field, 
  Ctx } from "type-graphql";
import { hash, compare } from "bcryptjs";
import { User } from "./entity/User";
import { MyContext } from "./MyContext";
import { createAccessToken, createRefreshToken } from "./auth";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string
}

@Resolver()
export class UserResolver {
  @Query(() => String )
  hello() { return "hi!" }

  @Query(() => [User])
  users() {  return User.find() }

  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string,
  ) { 
    const hashedPassword = await hash(password, 12);
    try {
      await User.insert({
        email,
        password: hashedPassword
      })
    } catch (err) { console.log(err); }
    return true; 
  }
  
  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> { 
    const user = await User.findOne({ where: { email } });
    if (!user) { throw new Error("could not find user"); }
    // user.password is hashed
    const valid = await compare(password, user.password);
    if (!valid) { throw new Error("bad password") }
    // login successful
    res.cookie("jid", createRefreshToken(user),
      { httpOnly: true }
      );
    return {
      accessToken: createAccessToken(user)
    }; 
  }

}


// befor typegraphql: const apolloServer = new ApolloServer({
//   typeDefs: `type Query { hello: String! }`,
//   resolvers: { Query: { hello: () => "hello world" } }
// });