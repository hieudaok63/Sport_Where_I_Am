import { GraphQLList, GraphQLString, GraphQLFloat, GraphQLInt } from 'graphql';
import Merchandise from '../types/Merchandise';
import { getMerchandiseByEventId } from '../../services/shop-service';

const merchandiseByEventId = {
  type: Merchandise,
  args: {
    eventId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId, transactionToken } = args;
    if (eventId && transactionToken) {
      return getMerchandiseByEventId(eventId, transactionToken);
    }
    return null;
  },
};

export { merchandiseByEventId };
