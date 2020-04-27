import { GraphQLList } from 'graphql';

import Events from '../types/Events';
import { getAllExperiences } from '../../services/experiences-service';

const EXPERIENCES = 'Experiences';

const allExperiences = {
  type: GraphQLList(Events(EXPERIENCES)),
  args: {},
  resolve: (rawUserData, args, req) => getAllExperiences(req.token),
};

export { allExperiences };
