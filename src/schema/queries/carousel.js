import { GraphQLList } from 'graphql';

import Carousel from '../types/Carousel';
import { getAllCarousels } from '../../services/carousel-service';

export const allCarousels = {
  type: GraphQLList(Carousel),
  args: {},
  resolve: (rawUserData, args, req) =>
    getAllCarousels(req.headers.authorization),
};
