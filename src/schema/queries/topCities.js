import { GraphQLList } from 'graphql';

import TopCities from '../types/TopCities';
import { getTopCities } from '../../services/top-cities-service';

const topCities = {
  type: GraphQLList(TopCities),
  args: {},
  resolve: (rawUserData, args, req) => getTopCities(req.token),
};

export { topCities };
