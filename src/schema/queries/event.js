import { GraphQLString } from 'graphql';
import EventWithCityDetails from '../types/EventWithCityDetails';
import { getEventById } from '../../services/event-service';

const eventById = {
  type: EventWithCityDetails,
  args: {
    eventId: { type: GraphQLString },
  },
  resolve: (rawUserData, args, req) => {
    const { eventId } = args;
    if (eventId) {
      return getEventById(eventId, req.token);
    }
    return null;
  },
};

export { eventById };
