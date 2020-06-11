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
  },
});

export default LineItem;
