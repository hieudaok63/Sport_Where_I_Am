import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import City from '../types/City';
import CityDetails from '../types/CityDetails';
import {
  getAllCities,
  getCityById,
  getCityDetailsByIdFromDate,
} from '../../services/city-service';

export const venueByIdFromDate = {
  type: CityDetails,
  args: {
    id: { type: GraphQLID },
    fromDate: { type: GraphQLString },
  },
  resolve: (rawCityData, args, req) => {
    const { id, fromDate } = args;
    if (id) {
      return getCityDetailsByIdFromDate(id, fromDate, req.token);
    }
    return null;
  },
};

