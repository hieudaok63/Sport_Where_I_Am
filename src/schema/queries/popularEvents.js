import { GraphQLList } from 'graphql';

import Events from '../types/Events';
import { getAllPopularEvents } from '../../services/popularEvents-service';

const POPULAREVENTS = 'PopularEvents';

const allPopularEvents = {
  type: GraphQLList(Events(POPULAREVENTS)),
  args: {},
  resolve: (rawUserData, args, req) => getAllPopularEvents(req.token),
};

export { allPopularEvents };
