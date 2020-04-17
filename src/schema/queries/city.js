import { GraphQLID, GraphQLList, GraphQLInt } from 'graphql';
import City from '../types/City';
import { getAllCities, getCityById } from '../../services/city-service';

export const cityById = {
  type: City,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (rawUserData, args, req) => {
    const { id } = args;
    if (id) {
      return getCityById(id, req.token);
    }
    return null;
  },
};

export const allCities = {
  type: GraphQLList(City),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (rawUserData, args, req) => getAllCities(args, req.token),
};
