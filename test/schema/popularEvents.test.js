import nock from 'nock';
import popularEvents from '../test-data/test-popularEvents-data';

const mockApi = process.env.BASE_API_V2 || 'http://localhost:4000';
const popularEventsRoute = '/cms/v1/getPopularEvents';

const setup = () => {
  nock(mockApi)
    .get(`${popularEventsRoute}`)
    .reply(200, popularEvents);
};

const popularEventsLength = 10;

describe('allPopularEvents Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`allPopularEvents query should return list of popular events with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allPopularEvents {
                    eventID
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const popularsResult = res.body.data.allPopularEvents;
        expect(popularsResult.length).toBe(popularEventsLength);
        expect(popularsResult[0]).toHaveProperty('eventID');
        return done();
      });
  });
});
