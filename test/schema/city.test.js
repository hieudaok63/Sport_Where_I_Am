import nock from 'nock';
import cities from '../test-data/test-city-data';

const mockApi = process.env.SWIAM_API_V3I || 'http://localhost:4000';
const cityRoute = '/cities';

const setup = () => {
  cities.forEach(item => {
    nock(mockApi)
      .get(`${cityRoute}/${item.id}`)
      .reply(200, item);
  });

  nock(mockApi)
    .get(`${cityRoute}`)
    .reply(200, cities);
};

const cityId = 117;
const citiesLength = 4;

describe('Cities Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`cityById query should return city with id = ${cityId} with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  cityById(id: "${cityId}") {
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
        const city = res.body.data.cityById;
        expect(city).toHaveProperty('id');
        expect(city).toHaveProperty('name');
        expect(city).toHaveProperty('thisHref');
        expect(city).toHaveProperty('venuesHref');
        expect(city).toHaveProperty('eventsHref');
        expect(city.id).toBe(117);
        expect(city.name).toEqual('Aberdeen');
        return done();
      });
  });

  it(`allCities query should return list of cities with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allCities {
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
        const citiesResult = res.body.data.allCities;
        expect(citiesResult.length).toBe(citiesLength);
        expect(citiesResult[0]).toHaveProperty('id');
        expect(citiesResult[0]).toHaveProperty('name');
        expect(citiesResult[0]).toHaveProperty('thisHref');
        expect(citiesResult[0]).toHaveProperty('venuesHref');
        expect(citiesResult[0]).toHaveProperty('eventsHref');
        return done();
      });
  });
});
