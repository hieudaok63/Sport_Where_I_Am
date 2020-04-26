import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const Carousel = new GraphQLObjectType({
  name: 'Carousel',
  fields: {
    carouselItemID: { type: GraphQLInt },
    description: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    mobileImageURL: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

export default Carousel;
