import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';

import PriceCart, { PriceCartInput } from './PriceCart';

const fields = {
  token: { type: GraphQLString },
  gateway: { type: GraphQLString },
  partner: { type: GraphQLString },
  chargeId: { type: GraphQLString },
  result: { type: GraphQLString },
  refundId: { type: GraphQLString },
};

const Payment = new GraphQLObjectType({
  name: 'Payment',
  fields: {
    ...fields,
    currencyAmount: { type: PriceCart },
  },
});

export const PaymentInput = new GraphQLInputObjectType({
  name: 'PaymentInput',
  fields: {
    ...fields,
    currencyAmount: { type: PriceCartInput },
  },
});

export default Payment;
