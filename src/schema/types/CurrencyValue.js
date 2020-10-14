import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

const CurrencyValue = new GraphQLObjectType({
  name: 'CurrencyValue',
  fields: {
    amount: { type: GraphQLFloat },
    currencyId: { type: GraphQLString },
  },
});

export default CurrencyValue;
