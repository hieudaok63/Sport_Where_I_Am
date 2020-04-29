import nock from 'nock';
import carousel from '../test-data/test-carousel-data';

const mockApi = process.env.BASE_API_V2 || 'http://localhost:4000';
const carouselRoute = '/cms/v1/getMainCarousel';

const setup = () => {
  nock(mockApi)
    .get(`${carouselRoute}`)
    .reply(200, carousel);
};

const carouselLength = 1;

describe('Carousel Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`allCarousels query should return list of sports with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allCarousels {
                    carouselItemID
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);

        const carouselResult = res.body.data.allCarousels;
        expect(carouselResult.length).toBe(carouselLength);
        expect(carouselResult[0]).toHaveProperty('carouselItemID');
        return done();
      });
  });
});
