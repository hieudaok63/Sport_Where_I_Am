import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import ExtInfo from './ExtInfo';
import CartProduct from './CartProduct';
import ShippingOption from './ShippingOption';
import PriceCart from './PriceCart';
import CustomerInfo from './CustomerInfo';
import StatusLine from './StatusLine';
import EventWithCityDetails from '../EventWithCityDetails';
import { getEventById } from '../../../services/event-service';

const LineItem = new GraphQLObjectType({
  name: 'LineItem',
  fields: {
    id: { type: GraphQLString },
    status: { type: GraphQLString },
    extInfo: { type: ExtInfo },
    product: { type: CartProduct },
    quantity: { type: GraphQLInt },
    shippingOptions: { type: GraphQLList(ShippingOption) },
    selectedShippingOption: { type: ShippingOption },
    shadowShippingOption: { type: ShippingOption },
    subTotal: { type: PriceCart },
    fxRate: { type: GraphQLString },
    charges: { type: GraphQLList(PriceCart) },
    customerInfo: { type: CustomerInfo },
    statusLines: { type: GraphQLList(StatusLine) },
    created: { type: GraphQLString },
    eventId: { type: GraphQLString },
    eventData: {
      type: EventWithCityDetails,
      resolve: (rawLineItemData, args, req) => {
        const { eventId } = rawLineItemData;
        if (eventId) {
          return getEventById(eventId, req.headers.authorization);
        }
        return null;
      },
    },
  },
});

export default LineItem;
