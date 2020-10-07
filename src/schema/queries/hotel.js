import { GraphQLList } from 'graphql';

import Hotel, { TopHotel } from '../types/Hotel';
import {
  getAllHotels,
  getHotelsForBigSportingEvents,
  getPopularHotels,
  getPopularHotelsByCityId,
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
  resolve: (rawUserData, args, req) => getPopularHotelsByCityId(req.token),
}

export const hotelsForBigSportingEvents = {
  type: GraphQLList(TopHotel),
  args: {},
  resolve: (rawUserData, args, req) => getHotelsForBigSportingEvents(req.token),
};
