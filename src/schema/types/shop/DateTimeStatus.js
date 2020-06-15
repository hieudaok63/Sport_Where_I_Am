import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';

const DateTimeStatus = new GraphQLObjectType({
  name: 'DateTimeStatus',
  fields: {
    dateFinal: { type: GraphQLBoolean },
    timeFinal: { type: GraphQLBoolean },
    notes: { type: GraphQLString },
    startDateTime: { type: GraphQLString },
    endDateTime: { type: GraphQLString },
  },
});

export default DateTimeStatus;
