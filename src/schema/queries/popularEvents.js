import { GraphQLList } from 'graphql';

import Events from '../types/Events';
import { getAllPopularEvents } from '../../services/popularEvents-service';

const POPULAR_EVENTS = 'PopularEvents';

const allPopularEvents = {
  type: GraphQLList(Events(POPULAR_EVENTS)),
  args: {},
  resolve: (rawUserData, args, req) =>
    getAllPopularEvents(req.headers.authorization),
};

export { allPopularEvents };
