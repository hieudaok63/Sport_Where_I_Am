import nock from 'nock';
import blogPost from '../test-data/test-blogPost-data';

const mockApi = process.env.SWIAM_API || 'http://localhost:4000';
const blogPostRoute = '/cms/v1/popularBlogposts';

const setup = () => {
  nock(mockApi)
    .get(`${blogPostRoute}`)
    .reply(200, blogPost);
};

const blogPostLength = 2;

describe('BlogPost Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`allBlogPosts query should return list of sports with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allBlogPosts {
                   id
                   title
                   summary 
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const sportsResult = res.body.data.allBlogPosts;
        expect(sportsResult.length).toBe(blogPostLength);
        expect(sportsResult[0]).toHaveProperty('id');
        expect(sportsResult[0]).toHaveProperty('title');
        expect(sportsResult[0]).toHaveProperty('summary');
        return done();
      });
  });
});
