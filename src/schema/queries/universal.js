import { GraphQLList, GraphQLString } from 'graphql';

import {
  getAccessToken,
  getCountries,
  getStates,
  getCities,
} from '../../services/universal-service';

import { AuthToken, Countries, States, Cities } from '../types/Universal';

const getUniversalToken = {
  type: AuthToken,
  resolve: () => getAccessToken(),
};

const listAllCountries = {
  type: GraphQLList(Countries),
  resolve: () => getCountries(),
};

const listAllStates = {
  type: GraphQLList(States),
  args: { country: { type: GraphQLString } },
  resolve: (_, args) => {
    const { country } = args;

    return getStates(country);
  },
};

const listAllCities = {
  type: GraphQLList(Cities),
  args: { state: { type: GraphQLString } },
  resolve: (_, args) => {
    const { state } = args;

    return getCities(state);
  },
};

export { getUniversalToken, listAllCountries, listAllStates, listAllCities };
