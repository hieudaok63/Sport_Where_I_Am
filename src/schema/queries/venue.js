import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import Venue from '../types/Venue';
import getVenueByIdFromDate from '../../services/venue-service';

export const venueByIdFromDate = {
  type: Venue,
  args: {
    id: { type: GraphQLID },
    fromDate: { type: GraphQLString },
  },
  resolve: (rawCityData, args, req) => {
    const { id, fromDate } = args;
    if (id) {
      return getVenueByIdFromDate(id, fromDate, req.token);
    }
    return null;
  },
};

export const venueImportantInformationById = {
  type: Venue,
  args: {
    id: { type: GraphQLID },
    fromDate: { type: GraphQLString },
  },
  resolve: (rawCityData, args, req) => {
    const { id, fromDate } = args;
    if (id) {
      return getVenueByIdFromDate(id, fromDate, req.token);
    }
    return null;
  },
}
