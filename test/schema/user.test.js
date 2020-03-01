import nock from 'nock';
import users from '../test-data/user-data';
import departments from '../test-data/department-data';

import { getUserById, getAllUsers } from '../../src/services/user-service';

const mockApi = process.env.BASE_API || 'http://localhost:4000';

const setup = () => {
  users.forEach(item => {
    nock(mockApi)
      .get(`/user-test/${item.id}`)
      .reply(200, item);
  });
  departments.forEach(item => {
    nock(mockApi)
      .get(`/department/${item.id}`)
      .reply(200, item);
  });

  nock(mockApi)
    .get('/user-test')
    .reply(200, users);
};

const userId = 0;

const expertValidUser = userToTest => {
  expect(userToTest).toBeTruthy();
  expect(userToTest).toHaveProperty('id');
  expect(userToTest).toHaveProperty('dateUpdated');
  expect(userToTest).toHaveProperty('email');
  expect(userToTest).toHaveProperty('firstName');
  expect(userToTest).toHaveProperty('photo');
  expect(userToTest).toHaveProperty('lastName');
  expect(userToTest).toHaveProperty('isActive');
  expect(userToTest).toHaveProperty('facebookUrl');
  expect(userToTest).toHaveProperty('twitterUrl');
  expect(userToTest).toHaveProperty('jobPosition');
  expect(userToTest).toHaveProperty('departmentId');
};

describe('User Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`userById query should return user with id = ${userId} with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  userById(id: "${userId}") {
                    id
                    email
                    firstName
                    lastName
                    dateUpdated
                    email
                    photo
                    isActive
                    phone
                    facebookUrl
                    twitterUrl
                    jobPosition
                    departmentId
                    department {
                      id
                      departmentName
                    }
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const user = res.body.data.userById;
        expertValidUser(user);
        expect(user).toHaveProperty('department');
        const { department } = user;
        expect(department).toHaveProperty('id');
        expect(department).toHaveProperty('departmentName');
        return done();
      });
  });

  it(`allUsers query should return list of users with required fields`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  allUsers {
                    id
                    email
                    firstName
                    lastName
                    dateUpdated
                    email
                    photo
                    isActive
                    phone
                    facebookUrl
                    twitterUrl
                    jobPosition
                    departmentId
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const usersResult = res.body.data.allUsers;
        expect(usersResult.length).toBe(users.length);

        const user = usersResult[0];
        expertValidUser(user);
        return done();
      });
  });
});
