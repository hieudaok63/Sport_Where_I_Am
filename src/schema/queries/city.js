import { GraphQLID, GraphQLList } from 'graphql';
import City from '../types/City';
import CityDetails from '../types/CityDetails';
import {
  getAllCities,
  getCityById,
  getCityDetailsByIdFromDate,
} from '../../services/city-service';

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

export const cityDetailsByIdFromDate = {
  type: CityDetails,
  args: {
    id: { type: GraphQLID },
    fromDate: { type: GraphQLID },
  },
  resolve: (rawUserData, args, req) => {
    const { id, fromDate } = args;
    if (id) {
      return getCityDetailsByIdFromDate(id, fromDate, req.token);
    }
    return null;
  },
};

export const allCities = {
  type: GraphQLList(City),
  args: {},
  resolve: (rawUserData, args, req) => getAllCities(req.token),
};
