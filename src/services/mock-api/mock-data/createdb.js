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
const leagues = require('./leagues-data');
const league = require('./league-data');
const leagueVideos = require('./leagueVideos-data');
const search = require('./search-data');
const popularEvents = require('./popularEvents-data');
const leagueNews = require('./leagueNews-data');
const nearbyEvents = require('./nearbyEvents-data');
const experiences = require('./experiences-data');
const hotel = require('./hotel-data');
const user = require('./user-data');
const leagueTeams = require('./leagueTeams-data');
const venues = require('./venues-data');
const eventProducts = require('./product-data');
const eventDetails = require('./event-data/eventDetails-data');
const team = require('./team-data');
const interestData = require('./interest-data');
const searchProducts = require('./search-products-data');

writeData(DB_FILEPATH, {
  blogPost,
  carousel,
  city: cities,
  venues,
  cityDetails,
  experiences,
  popularEvents,
  leagueVideos,
  leagueTeams,
  nearbyEvents,
  sports,
  search,
  hotel,
  leagueNews,
  user,
  league,
  leagues,
  eventProducts,
  eventDetails,
  team,
  interestData,
  searchProducts,
});
