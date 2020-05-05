import nock from 'nock';
import experiences from '../test-data/test-experiences-data';

const mockApi = process.env.SWIAM_OPENAPI || 'http://localhost:4000';
const experiencesRoute = '/cms/v1/getPopularExperiences';

const setup = () => {
  nock(mockApi)
    .get(`${experiencesRoute}`)
    .reply(200, experiences);
};

const experiencesLength = 10;

describe('Experiences Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`allExperiences query should return list of experiences with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allExperiences {
                    eventID
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const popularsResult = res.body.data.allExperiences;
        expect(popularsResult.length).toBe(experiencesLength);
        expect(popularsResult[0]).toHaveProperty('eventID');
        return done();
      });
  });
});
