import { GraphQLList, GraphQLString } from 'graphql';
import Search from '../types/Search';
import { getSearchByTerm } from '../../services/search-service';

const searchByTerm = {
  type: GraphQLList(Search),
  args: {
    searchTerm: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { searchTerm } = args;
    if (searchTerm) {
      return getSearchByTerm(searchTerm, req.headers.authorization);
    }
    return null;
  },
};

export { searchByTerm };
