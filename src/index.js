
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";
 
 
let server = new ApolloServer({ typeDefs, resolvers, tracing: true });
 
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
