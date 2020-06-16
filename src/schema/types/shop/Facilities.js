import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

const Facilities = new GraphQLObjectType({
  name: 'Facilities',
  fields: {
    business: { type: GraphQLList(GraphQLString) },
    area: { type: GraphQLList(GraphQLString) },
    dining: { type: GraphQLList(GraphQLString) },
    disabled: { type: GraphQLList(GraphQLString) },
    property: { type: GraphQLList(GraphQLString) },
    room: { type: GraphQLList(GraphQLString) },
    family: { type: GraphQLList(GraphQLString) },
    leisure: { type: GraphQLList(GraphQLString) },
    other: { type: GraphQLList(GraphQLString) },
  },
});

export default Facilities;
