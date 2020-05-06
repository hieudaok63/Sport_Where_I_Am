// eslint-disable-next-line import/no-extraneous-dependencies
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

// Generate entities
const blogPost = require('./blogPost-data');
const cities = require('./city-data');
const cityDetails = require('./city-data/cityDetails-data');
const carousel = require('./carousel-data');
const sports = require('./sports-data');
const search = require('./search-data');
const popularEvents = require('./popularEvents-data');
const experiences = require('./experiences-data');
const hotel = require('./hotel-data');
const user = require('./user-data');

writeData(DB_FILEPATH, {
  blogPost,
  carousel,
  city: cities,
  cityDetails,
  experiences,
  popularEvents,
  sports,
  search,
  hotel,
  user,
});
