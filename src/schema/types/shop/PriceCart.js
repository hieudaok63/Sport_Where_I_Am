import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} from 'graphql';

const fields = {
  currency: { type: GraphQLString },
  amount: { type: GraphQLString },
  annotation: { type: GraphQLString },
  error: { type: GraphQLString },
  runningTotal: { type: GraphQLString },
};

const PriceCart = new GraphQLObjectType({
  name: 'PriceCart',
  fields,
});

export const PriceCartInput = new GraphQLInputObjectType({
  name: 'PriceCartInput',
  fields,
});

export default PriceCart;
