import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import CityDetails from './CityDetails';
import { getCityById } from '../../services/city-service';

const City = new GraphQLObjectType({
  name: 'City',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    date: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    price: { type: GraphQLFloat },
    thisHref: { type: GraphQLString },
    venuesHref: { type: GraphQLString },
    eventsHref: { type: GraphQLString },
    cityDetails: {
      type: CityDetails,
      resolve: (rawUserData, args, req) => {
        const { id } = args;
        if (id) {
          return getCityById(id, req.token);
        }
        return null;
      },
    },
  },
});

export default City;
