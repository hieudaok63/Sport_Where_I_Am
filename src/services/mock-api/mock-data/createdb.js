// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const fs = require('fs');
const path = require('path');

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

// Generate entities
const blogPost = require('./blogPost-data');
const cities = require('./city-data');
const carousel = require('./carousel-data');
const sports = require('./sports-data');
const popularEvents = require('./popularEvents-data');
const experiences = require('./experiences-data');

writeData(DB_FILEPATH, {
  blogPost,
  carousel,
  city: cities,
  experiences,
  popularEvents,
  sports,
});
