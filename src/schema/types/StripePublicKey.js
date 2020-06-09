import { GraphQLObjectType, GraphQLString } from 'graphql';

const StripePublicKey = new GraphQLObjectType({
  name: 'StripePublicKey',
  fields: {
    value: { type: GraphQLString }, // TODO: confirm the fields
  },
});

export default StripePublicKey;
