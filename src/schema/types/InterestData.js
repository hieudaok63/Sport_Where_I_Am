import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';

import InterestTagging from './InterestTagging';

const InterestData = new GraphQLObjectType({
  name: 'InterestData',
  fields: {
    id: { type: GraphQLInt },
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: { type: InterestTagging },
    // link: { type: GraphQLString },
    objectType: { type: GraphQLString },
    title: { type: GraphQLString },
    postDate: { type: GraphQLString },
  },
});

// [
//   {
//     "id": 0,
//     "imageAspect": "SQUARE",
//     "imageURL": "string",
//     "interestTagging": {
//       "cityId": 0,
//       "homepage": true,
//       "leagueId": 0,
//       "teamId": 0,
//       "venueId": 0
//     },
//     "objectType": "VIDEO",
//     "postDate": "2020-06-15T02:09:15.597Z",
//     "title": "string"
//   }
// ],
//   "errorCode": 0,
//   "errorMessage": "string",
//   "status": 0

export default InterestData;
