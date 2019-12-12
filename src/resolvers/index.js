
import pubsub from "./../pubsub";
import { getBlockNumber , getBalance , sendRawTransaction} from './../pweb3';


// setInterval(async () => {

//     const bn = await getBlockNumber();

//     pubsub.publish("blockNumberChanged", {
//         blockNumberChanged: bn
//     });

// }, 2000);

export const resolvers = {

    Query: {
        getBlockNumber: () => {
            return getBlockNumber();
        }, 
        getBalance:(parent, args, context, info )=>{     

            return getBalance(args.address) ; 
        }, 
        sendRawTransaction:(parent , args , context , info )=>{
            return sendRawTransaction(args.signedTransaction);
        }
    },

    Subscription: {
        blockNumberChanged: {
            subscribe: () => {
                try {

                    return pubsub.asyncIterator(["blockNumberChanged"])

                }catch(error){
                    throw new Error(error) ; 
                }
               
            }
        }
    }
}
