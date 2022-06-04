// main page
// https://www.eventbrite.com/d/ny--new-york/free--food-and-drink--events/?end_date=2022-12-31&page=1&start_date=2022-06-25

const axios = require('axios');

const SeedEvents = async() => {
    const fetchEvents = await (axios.get('https://www.eventbriteapi.com/v3/categories/')).data;
    return fetchEvents;
}

module.exports = SeedEvents;