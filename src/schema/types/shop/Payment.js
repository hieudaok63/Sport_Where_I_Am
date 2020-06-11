import { GraphQLObjectType, GraphQLString } from 'graphql';

import PriceCart from './PriceCart';

const Payment = new GraphQLObjectType({
  name: 'Payment',
  fields: {
    currencyAmount: { type: PriceCart },
    token: { type: GraphQLString },
    gateway: { type: GraphQLString },
    partner: { type: GraphQLString },
    chargeId: { type: GraphQLString },
    result: { type: GraphQLString },
    refundId: { type: GraphQLString },
  },
});

export default Payment;
