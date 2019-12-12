
import pubsub from "./../pubsub";
import { getBlockNumber } from './../pweb3';


setInterval(async () => {

    const bn = await getBlockNumber();

    pubsub.publish("blockNumberChanged", {
        blockNumberChanged: bn
    });

}, 2000);

export const resolvers = {

    Query: {
        getBlockNumber: () => {
            return getBlockNumber();
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
