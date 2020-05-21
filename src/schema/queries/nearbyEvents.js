import { GraphQLList } from 'graphql';

import Events from '../types/Events';
import { getNearbyEventsByCityId } from '../../services/nearbyEvents-service';

const NEARBY_EVENTS = 'NearbyEvents';

export const getNearbyEventByCityId = {
  type: GraphQLList(Events(NEARBY_EVENTS)),
  args: {},
  resolve: (rawUserData, args, req) =>
    getNearbyEventsByCityId(args.cityId, req.token),
};
