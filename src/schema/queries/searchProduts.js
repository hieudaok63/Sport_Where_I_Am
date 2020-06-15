import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import SearchProducts from '../types/SearchProducts';
import { searchProductsQueryString } from '../../services/searchProducts-service';

export const searchProducts = {
  type: GraphQLList(SearchProducts),
  args: {
    vendor: { type: GraphQLString },
    query: { type: GraphQLString },
    offset: { type: GraphQLString },
    limit: { type: GraphQLInt },
    qualifiers: { type: GraphQLString },
    displayCurrency: { type: GraphQLString },
    cartId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) =>
    searchProductsQueryString(args, req.token),
};
