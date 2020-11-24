import { GraphQLID } from 'graphql';
import Team from '../types/Team';
import getTeamById from '../../services/team-service';

export const teamById = {
  type: Team,
  args: { id: { type: GraphQLID } },
  resolve: (rawTeamData, args, req) => {
    const { id } = args;

    if (id) {
      return getTeamById(id, req.headers.authorization);
    }
    return null;
  },
};
