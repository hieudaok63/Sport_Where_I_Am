import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';

import Hotel, { TopHotel, HotelData } from '../types/Hotel';
import {
  getAllHotels,
  getHotelsForBigSportingEvents,
  getPopularHotels,
  getPopularHotelsByCityId,
  getHotelsNearTheGame,
  getHotelDataById,
} from '../../services/hotel-service';

export const allHotels = {
  type: GraphQLList(Hotel),
  args: {},
  resolve: (rawUserData, args, req) => getAllHotels(req.headers.authorization),
};

export const hotelData = {
  type: HotelData,
  args: {
    hotelId: { type: GraphQLString },
  },
  resolve: (rawHotelData, args, req) => {
    const { hotelId } = args;
    if (hotelId !== undefined)
      return getHotelDataById(hotelId, req.headers.authorization);
    return null;
  },
};

export const popularHotels = {
  type: GraphQLList(Hotel),
  args: {},
  resolve: (rawUserData, args, req) =>
    getPopularHotels(req.headers.authorization),
};

export const popularHotelsByCityId = {
  type: GraphQLList(Hotel),
  args: {
    cityId: { type: GraphQLInt },
  },
  resolve: (rawUserData, args, req) => {
    const { cityId } = args;
    if (cityId !== undefined) {
      return getPopularHotelsByCityId(cityId, req.headers.authorization);
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
      return getHotelsNearTheGame(eventId, req.headers.authorization);
    }
    return null;
  },
};

export const hotelsForBigSportingEvents = {
  type: GraphQLList(TopHotel),
  args: {},
  resolve: (rawUserData, args, req) =>
    getHotelsForBigSportingEvents(req.headers.authorization),
};
