import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import Events from '../types/Events';
import {
  getNearbyEventsByCityId,
  getEventsNearHotel,
} from '../../services/nearbyEvents-service';

const NEARBY_EVENTS = 'NearbyEvents';
const EVENTS_NEAR_HOTEL = 'EventsNearHotel';

export const nearbyEventsByCityId = {
  type: GraphQLList(Events(NEARBY_EVENTS)),
  args: {
    cityId: { type: GraphQLInt },
  },
  resolve: (rawEventData, args, req) => {
    const { cityId } = args;
    if (cityId) {
      return getNearbyEventsByCityId(cityId, req.headers.authorization);
    }
    return null;
  },
};

export const eventsNearHotel = {
  type: GraphQLList(Events(EVENTS_NEAR_HOTEL)),
  args: {
    hotelId: { type: GraphQLString },
  },
  resolve: (rawEventData, args, req) => {
    const { hotelId } = args;
    if (hotelId) {
      return getEventsNearHotel(hotelId, req.headers.authorization);
    }
    return null;
  },
};
