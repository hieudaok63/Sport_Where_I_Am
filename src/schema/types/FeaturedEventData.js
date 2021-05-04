import { GraphQLObjectType, GraphQLList, GraphQLString } from 'graphql';

const TicketClass = new GraphQLObjectType({
  name: 'TicketClass',
  fields: {
    ticketClassDescription: { type: GraphQLString },
    ticketClassImage: { type: GraphQLString },
  },
});

const FeaturedEventData = new GraphQLObjectType({
  name: 'FeaturedEventData',
  fields: {
    featuredImages: { type: GraphQLList(GraphQLString) },
    introductionTag: { type: GraphQLString },
    introductionBody: { type: GraphQLString },
    ticketClasses: { type: GraphQLList(TicketClass) },
    sponsorImage: { type: GraphQLString },
    sponsorDescription: { type: GraphQLString },
    ticketPurchaseConditions: { type: GraphQLString },
  },
});

export default FeaturedEventData;
