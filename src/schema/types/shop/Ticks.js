import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

const Ticks = new GraphQLObjectType({
  name: 'Ticks',
  fields: {
    parking: { type: GraphQLBoolean },
    pool: { type: GraphQLBoolean },
    restaurants: { type: GraphQLBoolean },
    wifi: { type: GraphQLBoolean },
  },
});

export default Ticks;
