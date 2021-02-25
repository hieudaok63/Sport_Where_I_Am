import { GraphQLBoolean, GraphQLList, GraphQLString } from 'graphql';
import Search from '../types/Search';
import { getSearchByTerm } from '../../services/search-service';

const searchByTerm = {
  type: GraphQLList(Search),
  args: {
    searchTerm: { type: GraphQLString },
    useHotelIDs: { type: GraphQLBoolean },
  },
  resolve: async (rawUserData, args, req) => {
    const { searchTerm, useHotelIDs } = args;
    if (searchTerm) {
      const results = await getSearchByTerm(
        searchTerm,
        useHotelIDs,
        req.headers.authorization
      );
      return results;
    }
    return null;
  },
};

export { searchByTerm };
