import React from 'react'

// main page
// https://www.eventbrite.com/d/ny--new-york/free--food-and-drink--events/?end_date=2022-12-31&page=1&start_date=2022-06-25

// sample event: https://www.eventbrite.com/e/kimeventbrite-intro-tickets-353140130637

class EventBrite {
  // Constructor when instantiated
  constructor() {
    this.auth_token = "";
// this.privatetoekn = 'B6THKWOK44JPHM3UHUIM';
// GET /v3/users/me HTTP 1.1 
// Host: www.eventbriteapi.com 
// Authorization: Bearer B6THKWOK44JPHM3UHUIM
    this.apikey = "V4AE6W24NH2RURNNKA";
    this.secret = "YYVNVOLAQRPTUKHAS53NKBOD4UW5POTBBL3ZBXBGMUVT5M7PZT";
    this.privatetoken = "JEWHBXVJCBGU2HWD76D2";
    this.publictoken = "IJFSN65CEYRDTZNSUXHD";
    this.orderby = "date";
  }

  async getVenue(venueId) {
    const venueResponse = await fetch(
      `https://www.eventbriteapi.com/v3/venues/${venueId}/`, 
      {
        headers : {
          'Authorization' : 'OAuth JEWHBXVJCBGU2HWD76D2 '
        }
      }
    );
    const venue = await venueResponse.json();
    console.log(venue);
    return venue;
  }

  // Get the Events from API
  async queryAPI(eventName, category) {
    const eventsResponse = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${
        this.orderby
      }&categories=${category}`, 
      {
        headers : {
          'Authorization' : 'OAuth JEWHBXVJCBGU2HWD76D2 '
        }
      }
    );

    // wait for response and return as json
    const events = await eventsResponse.json();

    return events;
  }

  // Get Categoies from API
  async getCategoriesAPI() {
    // Query the API
    const categoriesResponse = await fetch(
      `https://www.eventbriteapi.com/v3/categories/`, 
      {
        headers : {
          'Authorization' : 'OAuth JEWHBXVJCBGU2HWD76D2 '
        }
      }
    );

    // Hold for the response and then return as json
    const categories = await categoriesResponse.json();

    return {
      categories
    };
  }
}
/**
//  * COMPONENT
//  */
// const Events = () => {
//   return (
//     <div>
//       <h3> </h3>
//     </div>
//   )
// }

export default EventBrite