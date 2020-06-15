import { GraphQLObjectType, GraphQLBoolean } from 'graphql';

const Needs = new GraphQLObjectType({
  name: 'Needs',
  fields: {
    dob: { type: GraphQLBoolean },
  },
});

export default Needs;
