import { GraphQLBoolean, GraphQLList, GraphQLString } from 'graphql';
import Search from '../types/Search';
import { getSearchByTerm } from '../../services/search-service';

const searchByTerm = {
  type: GraphQLList(Search),
  args: {
    searchTerm: { type: GraphQLString },
    useHotelIDs: { type: GraphQLBoolean },
  },
  resolve: (rawUserData, args, req) => {
    const { searchTerm, useHotelIDs } = args;
    if (searchTerm) {
      return getSearchByTerm(
        searchTerm,
        useHotelIDs,
        req.headers.authorization
      );
    }
    return null;
  },
};

export { searchByTerm };
