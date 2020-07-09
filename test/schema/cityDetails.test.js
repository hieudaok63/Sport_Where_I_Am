import nock from 'nock';
import cityDetailsList from '../test-data/test-cityDetails-data';

const mockApi = process.env.SWIAM_API_V2 || 'http://localhost:4000';
const cityDetailsRoute = process.env.CITYDETAILS_ROUTE || '/usingwpids/cities';

const setup = () => {
  cityDetailsList.forEach(item => {
    nock(mockApi)
      .get(`${cityDetailsRoute}/${item.id}?dateTime=`)
      .reply(200, item);
  });

  // nock(mockApi)
  //   .get(`${cityDetailsRoute}`)
  //   .reply(200, cityDetailsList);
};

const cityId = 117;
const citiesLength = 1;

describe.skip('City Details Query', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it(`cityDetailsByIdFromDate query should return all of the events for that city`, done => {
    request
      .post(`/${apiPrefix}`)
      .send({
        query: `query {
                  cityDetailsByIdFromDate(id: "${cityId}", fromDate: "") {
                    events {
                      eventid
                      headline
                      eventName
                      sportid
                      sportIcon
                      venue {
                        venueid
                      }
                      venueid
                      leagueid
                      sportName
                      dateTime
                      priceFrom
                      venueWordpressID
                      buyTicketsURL
                      teamA
                      teamB
                      abbrev {
                        teamA
                        teamB
                      }
                      cityid
                      timelineItemType
                      dateTimeStamp
                      niceWhen
                      isFuture
                    } 
                  }
                } `,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const cityDetails = res.body.data.cityDetailsByIdFromDate;
        expect(cityDetails).toHaveProperty('events');
        const { events } = cityDetails;
        expect(events.length).toBe(8);
        expect(events[0]).toHaveProperty('eventid');
        expect(events[0]).toHaveProperty('headline');
        expect(events[0]).toHaveProperty('eventName');
        expect(events[0]).toHaveProperty('sportid');
        expect(events[0]).toHaveProperty('sportIcon');
        expect(events[0]).toHaveProperty('venue');
        expect(events[0]).toHaveProperty('venueid');
        expect(events[0]).toHaveProperty('leagueid');
        expect(events[0]).toHaveProperty('sportName');
        expect(events[0]).toHaveProperty('dateTime');
        expect(events[0]).toHaveProperty('priceFrom');
        expect(events[0]).toHaveProperty('venueWordpressID');
        expect(events[0]).toHaveProperty('buyTicketsURL');
        expect(events[0]).toHaveProperty('teamA');
        expect(events[0]).toHaveProperty('teamB');
        expect(events[0]).toHaveProperty('abbrev');
        expect(events[0]).toHaveProperty('cityid');
        expect(events[0]).toHaveProperty('timelineItemType');
        expect(events[0]).toHaveProperty('dateTimeStamp');
        expect(events[0]).toHaveProperty('niceWhen');
        expect(events[0]).toHaveProperty('isFuture');

        expect(events[0].eventid).toBe('160447');
        expect(events[0].venue.venueid).toBe('401');
        expect(events[0].abbrev.teamA).toEqual('PP');
        return done();
      });
  });
});
