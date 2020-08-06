import { GraphQLList } from 'graphql';

import Hotel, { TopHotel } from '../types/Hotel';
import {
  getAllHotels,
  getHotelsForBigSportingEvents,
  getPopularHotels,
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

export const hotelsForBigSportingEvents = {
  type: GraphQLList(TopHotel),
  args: {},
  resolve: (rawUserData, args, req) => getHotelsForBigSportingEvents(req.token),
};
