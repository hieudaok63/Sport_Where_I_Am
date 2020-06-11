import { GraphQLObjectType, GraphQLString } from 'graphql';

const CountryCart = new GraphQLObjectType({
  name: 'CountryCart',
  fields: {
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

export default CountryCart;
