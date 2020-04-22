import { GraphQLID, GraphQLList } from 'graphql';
import Popular from '../types/Popular';
import { getAllPopulars, getPopularById } from '../../services/popular-service';

export const popularById = {
  type: Popular,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (rawUserData, args, req) => {
    const { id } = args;
    if (id) {
      return getPopularById(id, req.token);
    }
    return null;
  },
};

export const allPopulars = {
  type: GraphQLList(Popular),
  args: {},
  resolve: (rawUserData, args, req) => getAllPopulars(req.token),
};
