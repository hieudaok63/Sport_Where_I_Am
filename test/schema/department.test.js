import nock from 'nock';
import departments from '../test-data/department-data';

const mockApi = process.env.BASE_API || 'http://localhost:4000';

const setup = () => {
  departments.forEach(item => {
    nock(mockApi)
      .get(`/department/${item.id}`)
      .reply(200, item);
  });

  nock(mockApi)
    .get('/department')
    .reply(200, departments);
};

const departmentId = 0;
const departmentsLength = 5;

describe('Department Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`departmentById query should return department with id = ${departmentId} with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  departmentById(id: "${departmentId}") {
                    id
                    departmentName
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const department = res.body.data.departmentById;
        expect(department).toHaveProperty('id');
        expect(department).toHaveProperty('departmentName');
        return done();
      });
  });

  it(`allDepartments query should return list of departments with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allDepartments {
                    id
                    departmentName
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const departmentsResult = res.body.data.allDepartments;
        expect(departmentsResult.length).toBe(departmentsLength);
        expect(departmentsResult[0]).toHaveProperty('id');
        expect(departmentsResult[0]).toHaveProperty('departmentName');
        return done();
      });
  });
});
