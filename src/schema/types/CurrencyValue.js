import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

const CurrencyValue = new GraphQLObjectType({
  name: 'CurrencyValue',
  fields: {
    amount: GraphQLFloat,
    currencyId: GraphQLString,
  },
});

export default CurrencyValue;
