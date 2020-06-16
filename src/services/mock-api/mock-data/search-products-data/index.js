module.exports = [
  {
    id: '1',
    type: 'EVENT',
    name: 'name test',
    description: 'description test',
    localDateTime: '2020-05-23 20:00',
    dateTimeStatus: {
      dateFinal: true,
      timeFinal: true,
      notes: 'test notes',
      startDateTime: '2020-05-01 20:00',
      endDateTime: '2020-05-31 20:00',
    },
    geo: {
      city: 'test city',
      country: {
        code: '1234',
        name: 'test name',
      },
      tz: 'test tz',
      pois: [
        {
          key: '1',
          units: 'test units',
          distance: 0,
          lat: 0,
          lng: 0,
        },
      ],
    },
    price: {
      currency: '109',
      amount: 10,
      annotation: 'test annotation',
      error: 'test error',
      runningTotal: 0,
    },
    url: 'http://www.test.com',
    urlType: 'EMBEDDED',
    selectedVariant: {
      id: 'string',
      type: 'OTHER',
      name: 'string',
      description: 'string',
      price: {
        currency: 'string',
        amount: 0,
        annotation: 'string',
        error: 'string',
        runningTotal: 0,
      },
      url: 'string',
      urlType: 'EMBEDDED',
      attributes: {
        additionalProp1: 'string',
        additionalProp2: 'string',
        additionalProp3: 'string',
      },
    },
    variants: [
      {
        id: 'string',
        type: 'OTHER',
        name: 'string',
        description: 'string',
        price: {
          currency: 'string',
          amount: 0,
          annotation: 'string',
          error: 'string',
          runningTotal: 0,
        },
        url: 'string',
        urlType: 'EMBEDDED',
        attributes: {
          additionalProp1: 'string',
          additionalProp2: 'string',
          additionalProp3: 'string',
        },
      },
    ],
    needs: {
      dob: true,
    },
    notes: [
      {
        title: 'string',
        body: 'string',
      },
    ],
    venueDetails: {
      rating: 0,
      address: {
        attn: 'string',
        premise: 'string',
        address1: 'string',
        address2: 'string',
        city: 'string',
        state: 'string',
        postCode: 'string',
        country: {
          code: '1234',
          name: 'string',
        },
        phone: '111111111',
        purposes: ['SHIPPING'],
      },
      images: [
        {
          url: 'http://www.test.com',
          caption: 'test caption',
        },
      ],
      facilities: ['test facilities'],
      ticks: ['test ticks'],
    },
  },
];
