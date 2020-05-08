import nock from 'nock';
import hotels from '../test-data/test-hotel-data';

const mockApi = process.env.SWIAM_OPENAPI || 'http://localhost:4000';
const sportRoute = '/cms/v1/getPopularHotel';

const setup = () => {
  nock(mockApi)
    .get(`${sportRoute}`)
    .reply(200, hotels);
};

const hotelsLength = 10;

describe('Hotels Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`allHotels query should return list of hotels with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allHotels {
                    hotelID
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const sportsResult = res.body.data.allHotels;
        expect(sportsResult.length).toBe(hotelsLength);
        expect(sportsResult[0]).toHaveProperty('hotelID');
        return done();
      });
  });
});
