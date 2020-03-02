import { GraphQLID, GraphQLList } from 'graphql';
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
  resolve: (rawUserData, args, req) => getAllCities(req.token),
};
