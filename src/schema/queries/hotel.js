import { GraphQLList } from 'graphql';

import Hotel from '../types/Hotel';
import { getAllHotels } from '../../services/hotel-service';

export const allHotels = {
  type: GraphQLList(Hotel),
  args: {},
  resolve: (rawUserData, args, req) => getAllHotels(req.token),
};
