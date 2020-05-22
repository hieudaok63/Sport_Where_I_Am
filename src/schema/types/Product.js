import { GraphQLObjectType, GraphQLString } from 'graphql';

const Product = new GraphQLObjectType({
  name: 'Product',
  fields: {
    value: { type: GraphQLString },
  },
});

export default Product;
