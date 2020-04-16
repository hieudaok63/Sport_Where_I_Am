import nock from 'nock';
import populars from '../test-data/test-pupular-data';

const mockApi = process.env.BASE_API || 'http://localhost:4000';
const popularRoute = process.env.POPULAR_ROUTE || '/v3i/popular';

const setup = () => {
  populars.forEach(item => {
    nock(mockApi)
      .get(`${popularRoute}/${item.id}`)
      .reply(200, item);
  });

  nock(mockApi)
    .get(`${popularRoute}`)
    .reply(200, populars);
};

const popularId = 117;
const popularsLength = 4;

describe('Populars Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`popularById query should return popular with id = ${popularId} with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  popularById(id: "${popularId}") {
                    id
                    name
                    thisHref
                    venuesHref
                    eventsHref
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const popular = res.body.data.popularById;
        expect(popular).toHaveProperty('id');
        expect(popular).toHaveProperty('name');
        expect(popular).toHaveProperty('thisHref');
        expect(popular).toHaveProperty('venuesHref');
        expect(popular).toHaveProperty('eventsHref');
        return done();
      });
  });

  it(`allPopulars query should return list of populars with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allPopulars {
                    id
                    name
                    thisHref
                    venuesHref
                    eventsHref
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const popularsResult = res.body.data.allPopulars;
        expect(popularsResult.length).toBe(popularsLength);
        expect(popularsResult[0]).toHaveProperty('id');
        expect(popularsResult[0]).toHaveProperty('name');
        expect(popularsResult[0]).toHaveProperty('thisHref');
        expect(popularsResult[0]).toHaveProperty('venuesHref');
        expect(popularsResult[0]).toHaveProperty('eventsHref');
        return done();
      });
  });
});
