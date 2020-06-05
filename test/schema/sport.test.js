import nock from 'nock';
import sports from '../test-data/test-sports-data';

const mockApi = process.env.SWIAM_OPENAPI || 'http://localhost:4000';
const sportRoute = '/cms/v1/sports';

const setup = () => {
  nock(mockApi)
    .get(`${sportRoute}`)
    .reply(200, sports);
};

const sportsLength = 22;

describe('Sports Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`allSports query should return list of sports with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allSports {
                    sportID
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        const sportsResult = res.body.data.allSports;
        expect(sportsResult.length).toBe(sportsLength);
        expect(sportsResult[0]).toHaveProperty('sportID');
        return done();
      });
  });
});
