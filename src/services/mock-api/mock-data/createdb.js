// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const NUMBER_OF_USERS = 5;
const NUMBER_OF_DEPARTMENTS = 5;

const DB_FILEPATH = path.resolve(`${__dirname}`, 'db.json');

const writeData = (filePath, data) => {
  const directoryPath = path.dirname(filePath);

  // Make DB Directory if it doesn't exist
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
  }

  fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log(err);
    }
    console.log('Data set generated successfully!');
  });
};

const getEmptyArray = length => new Array(length).fill(null);

// ==============================================

const generateUsers = length =>
  getEmptyArray(length).map((ele, index) => ({
    id: index.toString(),
    dateUpdated: faker.date.past(5),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    photo: faker.image.imageUrl(),
    lastName: faker.name.lastName(),
    isActive: faker.random.boolean(),
    phone: faker.phone.phoneNumber(),
    facebookUrl: faker.internet.url(),
    twitterUrl: faker.internet.url(),
    jobPosition: faker.name.jobTitle(),
  }));

const generateDepartments = length =>
  getEmptyArray(length).map((ele, index) => ({
    id: index,
    departmentName: faker.commerce.department(),
  }));

// ==============================================

// Generate random entities
let users = generateUsers(NUMBER_OF_USERS);
const departments = generateDepartments(NUMBER_OF_DEPARTMENTS);

// Add department to each user
users = users.map(user => {
  // eslint-disable-next-line no-param-reassign
  user.departmentId = faker.random.number({
    min: 0,
    max: NUMBER_OF_DEPARTMENTS - 1,
  });
  return user;
});

writeData(DB_FILEPATH, {
  user: users,
  department: departments,
});
