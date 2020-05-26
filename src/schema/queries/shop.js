import { GraphQLList, GraphQLString } from 'graphql';
import Product from '../types/Product';
import { getProductIdByEventId } from '../../services/shop-service';

const productIdByEventId = {
  type: GraphQLList(Product),
  args: {
    eventId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId } = args;
    if (eventId) {
      return getProductIdByEventId(eventId, req.token);
    }
    return null;
  },
};

export { productIdByEventId };
