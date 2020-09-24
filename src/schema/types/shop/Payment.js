import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType, GraphQLList,
} from 'graphql';

import PriceCart, { PriceCartInput } from './PriceCart';
import LineItem from './LineItem';

const fields = {
  token: { type: GraphQLString },
  gateway: { type: GraphQLString },
  partner: { type: GraphQLString },
  chargeId: { type: GraphQLString },
  result: { type: GraphQLString },
  refundId: { type: GraphQLString },
};

const Payment = new GraphQLObjectType({
  name: 'Payment',
  fields: {
    ...fields,
    currencyAmount: { type: PriceCart },
  },
});

export const PaymentInput = new GraphQLInputObjectType({
  name: 'PaymentInput',
  fields: {
    ...fields,
    currencyAmount: { type: PriceCartInput },
  },
});

export const PaymentConfirmation = new GraphQLInputObjectType({
  name: 'PaymentConfirmation',
  fields: {
    id: { type: GraphQLString },
    status: { type: GraphQLString },
    publishedFxDate: { type: GraphQLString },
    channel: { type: GraphQLString },
    lineItems: { type: GraphQLList(LineItem) },
    publishedFxDate: { type: GraphQLString }
  }
})

export default Payment;


// Payment Confirmation Example
{
  "id" : "X4R8BM",
  "status" : "COMPLETE",
  "publishedFxDate" : "2018-09-10",
  "channel" : "SWiAM",
  "lineItems" : [ {
  "id" : "a371492a1cac7ce66ee41ccddebeed34a08a51fac760963650c86280b2bd83cb994aeaa64753588fcf",
  "status" : "COMPLETE",
  "extInfo" : {
    "extId" : "DUMMYdDc8cdAlWGO",
    "extStatus" : "dummy"
  },
  "product" : {
    "id" : "a371492b1bab79b16ce6",
    "type" : "EVENT",
    "name" : "New York Mets vs. Miami Marlins - Home Opener",
    "description" : "Citi Field, Flushing at 03:30 on 8 Apr 2021",
    "localDateTime" : "2021-04-08T03:30:00",
    "geo" : {
      "city" : "Flushing",
      "country" : {
        "code" : "US",
        "name" : "United States of America"
      }
    },
    "price" : {
      "currency" : "AUD",
      "amount" : 4.45,
      "annotation" : "0.0 m/u All channels TN vendor AUD currency add 10USD+8%, free shipping"
    },
    "url" : "https://apidev2.sportswhereiam.com/punchout.html?channel=SWiAM&cartId=X4R8BM&currency=AUD&productId=a371492b1bab79b16ce6",
    "urlType" : "PUNCHOUT",
    "selectedVariant" : {
      "id" : "a37149271ea27db16ae51ad6",
      "type" : "TICKET",
      "name" : "Event Ticket",
      "description" : "Row 1,  Section 534",
      "price" : {
        "currency" : "AUD",
        "amount" : 205.44,
        "annotation" : "186.11 m/u All channels TN vendor AUD currency add 10USD+8%, free shipping"
      },
      "attributes" : {
        "inventory" : "4",
        "groupType" : "Event Ticket",
        "deliveryOpts" : "ETICKET",
        "lowHighSeats" : "*-*",
        "row" : "1",
        "section" : "534",
        "splits" : "2,4",
        "live" : "false",
        "notes" : "Mobile Entry Tickets. Must have smart device on hand to enter event. Do not print these tickets.  Tickets will be ready for delivery by Apr 06, 2021.",
        "rdo" : "MD"
      }
    },
    "notes" : [ {
      "title" : "We've got you covered",
      "body" : "100% worry free guarantee."
    }, {
      "title" : "Seating",
      "body" : "Your seats are together unless otherwise noted."
    } ]
  },
  "quantity" : 2,
  "selectedShippingOption" : {
    "id" : "a37149645df63cff6ea85d8d9cfaba61f68c53b6",
    "title" : "Mobile Ticket",
    "type" : "ETICKET",
    "price" : {
      "currency" : "AUD",
      "amount" : 0,
      "annotation" : "14.25 m/u Shipping/Delivery is FREE"
    },
    "addInfo" : [ {
      "type" : "Electronic",
      "text" : "Your tickets will be delivered by secure download."
    }, {
      "type" : "type",
      "text" : "delivery"
    }, {
      "type" : "disclaimer",
      "text" : "Mobile Entry Tickets. Must have smart device on hand to enter event."
    }, {
      "type" : "text",
      "text" : "Mobile Ticket"
    }, {
      "type" : "help",
      "text" : "Mobile Entry Tickets. You must present your tickets on a mobile device to enter the event. We’ll send you an email with instructions to access and use your tickets. They'll be transferred to you electronically using a secure system."
    }, {
      "type" : "expectedShipDate",
      "text" : "2021-04-06"
    } ]
  },
  "subTotal" : {
    "currency" : "AUD",
    "amount" : 410.88
  },
  "charges" : [ {
    "currency" : "USD",
    "amount" : 260,
    "annotation" : "Product"
  }, {
    "currency" : "USD",
    "amount" : 0,
    "annotation" : "Fee"
  }, {
    "currency" : "USD",
    "amount" : 9.95,
    "annotation" : "Shipping"
  } ],
  "statusLines" : [ {
    "status" : "WARN",
    "message" : "Need CustomerInfo"
  } ]
} ],
  "total" : {
  "currency" : "AUD",
    "amount" : 472.52,
    "annotation" : "Total"
},
  "splitTotal" : {
  "withCommission" : {
    "currency" : "AUD",
      "amount" : 472.52,
      "annotation" : "Tickets, 410.88 m/u Shipping, Booking Fee (15%)"
  },
  "withoutCommission" : {
    "currency" : "AUD",
      "amount" : 0,
      "annotation" : "Non-Ticket Items"
  }
},
  "charges" : [ {
  "currency" : "AUD",
  "amount" : 410.88,
  "annotation" : "Items"
}, {
  "currency" : "AUD",
  "amount" : 0,
  "annotation" : "Shipping",
  "runningTotal" : 410.88
}, {
  "currency" : "AUD",
  "amount" : 61.63,
  "annotation" : "Booking Fee (15%)",
  "runningTotal" : 472.51
} ],
  "displayCurrency" : "AUD",
  "payment" : {
  "currencyAmount" : {
    "currency" : "AUD",
      "amount" : 472.52
  },
  "token" : "tok_1HUlY5J3OENC2dZxdDsqpuxt",
    "gateway" : "Stripe",
    "chargeId" : "ch_1HUlY7J3OENC2dZxFXNTb6MR",
    "result" : "charged and captured: ch_1HUlY7J3OENC2dZxFXNTb6MR"
},
  "statusLines" : [ {
  "status" : "WARN",
  "message" : "Need CustomerInfo"
} ],
  "created" : "2020-09-24T03:52:45.734Z"
}
