import { GraphQLObjectType, GraphQLString } from 'graphql';

const PaymentPublicKey = new GraphQLObjectType({
  name: 'PaymentPublicKey',
  fields: {
    currency: { type: GraphQLString },
    publicKey: { type: GraphQLString },
    gateway: { type: GraphQLString },
  },
});

export default PaymentPublicKey;
