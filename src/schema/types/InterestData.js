import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import InterestTagging from './InterestTagging';

const InterestData = new GraphQLObjectType({
  name: 'InterestData',
  fields: {
    id: { type: GraphQLInt },
    blogpostID: { type: GraphQLInt },
    blogpostSummary: { type: GraphQLString },
    imageAspect: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    interestTagging: { type: InterestTagging },
    objectType: { type: GraphQLString },
    title: { type: GraphQLString },
    postDate: { type: GraphQLString },
    link: { type: GraphQLString },
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
// "blogpostID": 1,
//   "blogpostSummary": "The #LaLiga 2018/19 Schedule was just released! If you're visiting Spain any time from August onwards, get onto our website or App...",
//   "link": "https://www.instagram.com/p/BlrtWVjAK5E/",
//   "objectType": "EXTERNAL_LINK"
//   }
// ],
//   "errorCode": 0,
//   "errorMessage": "string",
//   "status": 0

export default InterestData;
