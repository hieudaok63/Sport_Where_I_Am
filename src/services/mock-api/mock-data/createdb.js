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
const cityDetails = require('./city-details');
const cityDetailsOld = require('./city-data/cityDetails-data');
const carousel = require('./carousel-data');
const eventProducts = require('./product-data');
const eventDetails = require('./event-data/eventDetails-data');
const experiences = require('./experiences-data');
const interestData = require('./interest-data');
const interestQuestions = require('./interestQuestions');
const hotel = require('./hotel-data');
const leagues = require('./leagues-data');
const league = require('./league-data');
const leagueVideos = require('./leagueVideos-data');
const login = require('./login-data');
const leagueNews = require('./leagueNews-data');
const leagueTeams = require('./leagueTeams-data');
const nearbyEvents = require('./nearbyEvents-data');
const popularEvents = require('./popularEvents-data');
const search = require('./search-data');
const searchProducts = require('./search-products-data');
const sports = require('./sports-data');
const team = require('./team-data');
const topLeagues = require('./topLeagues');
const topSportingHotel = require('./topSportingHotels');
const user = require('./user-data');
const venues = require('./venues-data');
const venueDetails = require('./venue-details');

writeData(DB_FILEPATH, {
  blogPost,
  carousel,
  city: cities,
  cityDetails,
  cityDetailsOld,
  experiences,
  eventDetails,
  eventProducts,
  hotel,
  interestData,
  interestQuestions,
  league,
  leagues,
  leagueNews,
  leagueVideos,
  leagueTeams,
  login,
  nearbyEvents,
  popularEvents,
  search,
  searchProducts,
  sports,
  team,
  topSportingHotel,
  topLeagues,
  user,
  venues,
  venueDetails,
});
