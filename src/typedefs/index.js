import { gql } from "apollo-server";

export const  typeDefs = gql`

# type TransactionSent {
#     blockHash : String 
#     blockNumber :String
#     contractAddress:String
#     cumulativeGasUsed:String
#     from:String
#     gasUsed:String
#     logs:[String]
#     logsBloom:String
#     status:Boolean
#     to:String
#     transactionHash:String
#     transactionIndex:Int
#     nonce:String
#     gas :String
# }

type Query {

    getBlockNumber:String! 
    getBalance(address:String):String!
    # sendRawTransaction(signedTransaction:String):TransactionSent 
}

type Subscription {
    blockNumberChanged: String  }
`;  

