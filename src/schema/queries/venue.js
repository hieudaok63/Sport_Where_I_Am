import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import Venue, { VenueImportantInformation } from '../types/Venue';
import getVenueByIdFromDate, {
  getVenueImportantInformationById,
  getVenueTipsById,
} from '../../services/venue-service';

export const venueByIdFromDate = {
  type: Venue,
  args: {
    id: { type: GraphQLID },
    fromDate: { type: GraphQLString },
  },
  resolve: (rawCityData, args, req) => {
    const { id, fromDate } = args;
    if (id) {
      return getVenueByIdFromDate(id, fromDate, req.headers.authorization);
    }
    return null;
  },
};

export const venueImportantInformationById = {
  type: GraphQLList(VenueImportantInformation),
  args: {
    id: { type: GraphQLID },
    fromDate: { type: GraphQLString },
  },
  resolve: (rawCityData, args, req) => {
    const { id, fromDate } = args;
    if (id) {
      return getVenueImportantInformationById(
        id,
        fromDate,
        req.headers.authorization
      );
    }
    return null;
  },
};

export const venueTipsById = {
  type: GraphQLList(VenueImportantInformation),
  args: {
    id: { type: GraphQLID },
    fromDate: { type: GraphQLString },
  },
  resolve: (rawCityData, args, req) => {
    const { id, fromDate } = args;
    if (id) {
      return getVenueTipsById(id, fromDate, req.headers.authorization);
    }
    return null;
  },
};
