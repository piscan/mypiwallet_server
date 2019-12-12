import { gql } from "apollo-server";

export const  typeDefs = gql`

type Query {

    getBlockNumber:String! 
}
type Subscription {
    blockNumberChanged: String
  }
`;  

