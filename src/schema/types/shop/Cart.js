import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import LineItem from './LineItem';
import PriceCart from './PriceCart';
import SplitTotal from './SplitTotal';
import CustomerInfo from './CustomerInfo';
import Payment from './Payment';
import StatusLine from './StatusLine';
import Booking from '../Booking';
import { findBooking } from '../../../services/booking-service';

const Cart = new GraphQLObjectType({
  name: 'Cart',
  fields: {
    id: { type: GraphQLString },
    status: { type: GraphQLString },
    publishedFxDate: { type: GraphQLString },
    channel: { type: GraphQLString },
    agencyCode: { type: GraphQLString },
    lineItems: { type: GraphQLList(LineItem) },
    total: { type: PriceCart },
    splitTotal: { type: SplitTotal },
    charges: { type: GraphQLList(PriceCart) },
    displayCurrency: { type: GraphQLString },
    customerInfo: { type: CustomerInfo },
    payment: { type: Payment },
    promoCodes: { type: GraphQLList(GraphQLString) },
    statusLines: { type: GraphQLList(StatusLine) },
    created: { type: GraphQLString },
    booking: {
      type: Booking,
      resolve: (rawCartData, args, req) => {
        if (rawCartData.id) {
          return findBooking(rawCartData.id, req.token);
        }
        return null;
      },
    },
  },
});

export default Cart;

// TODO: double check other types as below
// {
//   "id": "string",
//   "status": "PENDING",
//   "publishedFxDate": "string",
//   "channel": "string",
//   "agencyCode": "string",
//   "lineItems": [
//     {
//       "id": "string",
//       "status": "PENDING",
//       "extInfo": {
//         "extId": "string",
//         "extStatus": "string",
//         "extTicketId": "string",
//         "zdOrderStatus": "string",
//         "zdTicketInfo": "string"
//       },
//       "product": {
//         "id": "string",
//         "type": "EVENT",
//         "name": "string",
//         "description": "string",
//         "localDateTime": "string",
//         "dateTimeStatus": {
//           "dateFinal": true,
//           "timeFinal": true,
//           "notes": "string",
//           "startDateTime": "string",
//           "endDateTime": "string"
//         },
//         "geo": {
//           "city": "string",
//           "country": {
//             "code": "string",
//             "name": "string"
//           },
//           "tz": "string",
//           "pois": [
//             {
//               "key": "string",
//               "units": "string",
//               "distance": 0,
//               "lat": 0,
//               "lng": 0
//             }
//           ]
//         },
//         "price": {
//           "currency": "string",
//           "amount": 0,
//           "annotation": "string",
//           "error": "string",
//           "runningTotal": 0
//         },
//         "url": "string",
//         "urlType": "EMBEDDED",
//         "selectedVariant": {
//           "id": "string",
//           "type": "OTHER",
//           "name": "string",
//           "description": "string",
//           "price": {
//             "currency": "string",
//             "amount": 0,
//             "annotation": "string",
//             "error": "string",
//             "runningTotal": 0
//           },
//           "url": "string",
//           "urlType": "EMBEDDED",
//           "attributes": {
//             "additionalProp1": "string",
//             "additionalProp2": "string",
//             "additionalProp3": "string"
//           }
//         },
//         "variants": [
//           {
//             "id": "string",
//             "type": "OTHER",
//             "name": "string",
//             "description": "string",
//             "price": {
//               "currency": "string",
//               "amount": 0,
//               "annotation": "string",
//               "error": "string",
//               "runningTotal": 0
//             },
//             "url": "string",
//             "urlType": "EMBEDDED",
//             "attributes": {
//               "additionalProp1": "string",
//               "additionalProp2": "string",
//               "additionalProp3": "string"
//             }
//           }
//         ],
//         "needs": {
//           "dob": true
//         },
//         "notes": [
//           {
//             "title": "string",
//             "body": "string"
//           }
//         ],
//         "venueDetails": {
//           "rating": 0,
//           "address": {
//             "attn": "string",
//             "premise": "string",
//             "address1": "string",
//             "address2": "string",
//             "city": "string",
//             "state": "string",
//             "postCode": "string",
//             "country": {
//               "code": "string",
//               "name": "string"
//             },
//             "phone": "string",
//             "purposes": [
//               "SHIPPING"
//             ]
//           },
//           "images": [
//             {
//               "url": "string",
//               "caption": "string"
//             }
//           ],
//           "facilities": [
//             "Unknown Type: string]"
//           ],
//           "ticks": "Unknown Type: collection.immutable.map[string,boolean]"
//         }
//       },
//       "quantity": 0,
//       "shippingOptions": [
//         {
//           "id": "string",
//           "title": "string",
//           "type": "HOTEL_DELIVERY",
//           "price": {
//             "currency": "string",
//             "amount": 0,
//             "annotation": "string",
//             "error": "string",
//             "runningTotal": 0
//           },
//           "country": {
//             "code": "string",
//             "name": "string"
//           },
//           "addInfo": [
//             {
//               "type": "string",
//               "text": "string"
//             }
//           ],
//           "defaultMail": true
//         }
//       ],
//       "selectedShippingOption": {
//         "id": "string",
//         "title": "string",
//         "type": "HOTEL_DELIVERY",
//         "price": {
//           "currency": "string",
//           "amount": 0,
//           "annotation": "string",
//           "error": "string",
//           "runningTotal": 0
//         },
//         "country": {
//           "code": "string",
//           "name": "string"
//         },
//         "addInfo": [
//           {
//             "type": "string",
//             "text": "string"
//           }
//         ],
//         "defaultMail": true
//       },
//       "shadowShippingOption": {
//         "id": "string",
//         "title": "string",
//         "type": "HOTEL_DELIVERY",
//         "price": {
//           "currency": "string",
//           "amount": 0,
//           "annotation": "string",
//           "error": "string",
//           "runningTotal": 0
//         },
//         "country": {
//           "code": "string",
//           "name": "string"
//         },
//         "addInfo": [
//           {
//             "type": "string",
//             "text": "string"
//           }
//         ],
//         "defaultMail": true
//       },
//       "subTotal": {
//         "currency": "string",
//         "amount": 0,
//         "annotation": "string",
//         "error": "string",
//         "runningTotal": 0
//       },
//       "fxRate": 0,
//       "charges": [
//         {
//           "currency": "string",
//           "amount": 0,
//           "annotation": "string",
//           "error": "string",
//           "runningTotal": 0
//         }
//       ],
//       "customerInfo": {
//         "name": "string",
//         "email": "string",
//         "phone": "string",
//         "addresses": [
//           {
//             "attn": "string",
//             "premise": "string",
//             "address1": "string",
//             "address2": "string",
//             "city": "string",
//             "state": "string",
//             "postCode": "string",
//             "country": {
//               "code": "string",
//               "name": "string"
//             },
//             "phone": "string",
//             "purposes": [
//               "SHIPPING"
//             ]
//           }
//         ],
//         "dob": "string",
//         "age": 0,
//         "ticketingEmail": "string",
//         "title": "string",
//         "firstnames": "string",
//         "surname": "string",
//         "type": "IN",
//         "more": [
//           null
//         ]
//       },
//       "statusLines": [
//         {
//           "status": "string",
//           "message": "string",
//           "details": "Unknown Type: play.api.libs.json.jsvalue"
//         }
//       ],
//       "created": "Unknown Type: java.time.offsetdatetime"
//     }
//   ],
//   "total": {
//     "currency": "string",
//     "amount": 0,
//     "annotation": "string",
//     "error": "string",
//     "runningTotal": 0
//   },
//   "splitTotal": {
//     "withCommission": {
//       "currency": "string",
//       "amount": 0,
//       "annotation": "string",
//       "error": "string",
//       "runningTotal": 0
//     },
//     "withoutCommission": {
//       "currency": "string",
//       "amount": 0,
//       "annotation": "string",
//       "error": "string",
//       "runningTotal": 0
//     }
//   },
//   "charges": [
//     {
//       "currency": "string",
//       "amount": 0,
//       "annotation": "string",
//       "error": "string",
//       "runningTotal": 0
//     }
//   ],
//   "displayCurrency": "string",
//   "customerInfo": {
//     "name": "string",
//     "email": "string",
//     "phone": "string",
//     "addresses": [
//       {
//         "attn": "string",
//         "premise": "string",
//         "address1": "string",
//         "address2": "string",
//         "city": "string",
//         "state": "string",
//         "postCode": "string",
//         "country": {
//           "code": "string",
//           "name": "string"
//         },
//         "phone": "string",
//         "purposes": [
//           "SHIPPING"
//         ]
//       }
//     ],
//     "dob": "string",
//     "age": 0,
//     "ticketingEmail": "string",
//     "title": "string",
//     "firstnames": "string",
//     "surname": "string",
//     "type": "IN",
//     "more": [
//       null
//     ]
//   },
//   "payment": {
//     "currencyAmount": {
//       "currency": "string",
//       "amount": 0,
//       "annotation": "string",
//       "error": "string",
//       "runningTotal": 0
//     },
//     "token": "string",
//     "gateway": "string",
//     "partner": "string",
//     "chargeId": "string",
//     "result": "string",
//     "refundId": "string"
//   },
//   "promoCodes": [
//     "string"
//   ],
//   "statusLines": [
//     {
//       "status": "string",
//       "message": "string",
//       "details": "Unknown Type: play.api.libs.json.jsvalue"
//     }
//   ],
//   "created": "Unknown Type: java.time.offsetdatetime"
// }
