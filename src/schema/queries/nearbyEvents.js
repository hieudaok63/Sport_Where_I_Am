import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import Events from '../types/Events';
import { getNearbyEventsByCityId } from '../../services/nearbyEvents-service';

const NEARBY_EVENTS = 'NearbyEvents';

export const nearbyEventsByCityId = {
  type: GraphQLList(Events(NEARBY_EVENTS)),
  args: {
    cityId: { type: GraphQLString },
  },
  resolve: (rawEventData, args, req) => {
    const { cityId } = args;
    if (cityId) {
      return getNearbyEventsByCityId(cityId, req.token);
    }
    return null;
  },
};
