import TopCities from '../types/TopCities';
import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import City, { CitySummary } from '../types/City';
import CityDetails from '../types/CityDetails';
import { IdByName } from './index';
import {
  getAllCities,
  getCityById,
  getCityDetailsByIdFromDate,
  getPopularSportingCities,
  getTopCities,
} from '../../services/city-service';



export const cityById = {
  type: City,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (rawCityData, args, req) => {
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

export const popularSportingCities = {
  type: GraphQLList(CitySummary),
  args: {},
  resolve: (rawCityData, args, req) => getPopularSportingCities(req.token),
};

export const allCities = {
  type: GraphQLList(City),
  resolve: (rawUserData, args, req) => getAllCities(req.token),
};

export const topCities = {
  type: GraphQLList(TopCities),
  args: {},
  resolve: (rawUserData, args, req) => getTopCities(),
};
