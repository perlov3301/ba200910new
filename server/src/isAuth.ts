import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { MyContext } from "./MyContext";

// format bearer 1jfl12hthh
export const isAuth: MiddlewareFn<MyContext> = ({context}, next) => {
    const authorization = context.req.headers["authorization"];
    if (!authorization || !authorization[1] || authorization[1]==undefined) {
         throw new Error("not authenticated-authorizated"); }
    try {
        const token = authorization!.split(" ")[1];
        console.log(process.env.ACCESS_TOKEN_SECRET!);
        const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
        context.payload = payload! as any;
    } catch (err) { 
        console.log(err); 
        throw new Error("not authenticated")
    }
    return next();
  };