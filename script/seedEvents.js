const axios = require('axios');

const SeedEvents = async() => {
    const fetchEvents = await (axios.get('https://www.eventbriteapi.com/v3/categories/')).data;
    return fetchEvents;
}

module.exports = SeedEvents;