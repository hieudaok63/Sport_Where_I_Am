import { GraphQLList, GraphQLString } from 'graphql';

import Hotel, { TopHotel } from '../types/Hotel';
import {
  getAllHotels,
  getHotelsForBigSportingEvents,
  getPopularHotels,
  getPopularHotelsByCityId,
  getHotelsNearTheGame,
} from '../../services/hotel-service';

export const allHotels = {
  type: GraphQLList(Hotel),
  args: {},
  resolve: (rawUserData, args, req) => getAllHotels(req.token),
};

export const popularHotels = {
  type: GraphQLList(Hotel),
  args: {},
  resolve: (rawUserData, args, req) => getPopularHotels(req.token),
};

export const popularHotelsByCityId = {
  type: GraphQLList(Hotel),
  args: {
    cityId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { cityId } = args;
    if (cityId !== undefined) {
      return getPopularHotelsByCityId(cityId, req.token);
    }
    return null;
  },
};

export const hotelsNearTheGame = {
  type: GraphQLList(Hotel),
  args: {
    eventId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId } = args;
    if (eventId !== undefined) {
      return getHotelsNearTheGame(eventId, req.token);
    }
    return null;
  },
};

export const hotelsForBigSportingEvents = {
  type: GraphQLList(TopHotel),
  args: {},
  resolve: (rawUserData, args, req) => getHotelsForBigSportingEvents(req.token),
};
