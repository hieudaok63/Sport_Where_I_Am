import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const PriceCart = new GraphQLObjectType({
  name: 'PriceCart',
  fields: {
    currency: { type: GraphQLString },
    amount: { type: GraphQLInt },
    annotation: { type: GraphQLString },
    error: { type: GraphQLString },
    runningTotal: { type: GraphQLString },
  },
});

export default PriceCart;
