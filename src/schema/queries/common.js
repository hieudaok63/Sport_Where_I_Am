import {  GraphQLString } from 'graphql';
import { getObjectIdByName } from '../../services/common-service';
import { IdByName } from '../types/Common';

export const objectIdByName = {
  type: IdByName,
  args: {
    name: { type: GraphQLString },
  },
  resolve: (rawCityData, args, req) => {
    const { name } = args;
    if (name) {
      return getObjectIdByName(name, req.token);
    }
    return null;
  },
};
