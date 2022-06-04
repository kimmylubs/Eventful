import axios from 'axios';
import React from 'react'

// main page
// https://www.eventbrite.com/d/ny--new-york/free--food-and-drink--events/?end_date=2022-12-31&page=1&start_date=2022-06-25

// sample event: https://www.eventbrite.com/e/kimeventbrite-intro-tickets-353140130637

class EventBrite {
  // Constructor when instantiated
  constructor() {
    this.auth_token = "";
    
    this.myprivatetoken = 'B6THKWOK44JPHM3UHUIM';
// GET /v3/users/me HTTP 1.1 
// Host: www.eventbriteapi.com 
// Authorization: Bearer B6THKWOK44JPHM3UHUIM

// collecting the api from event brite
// http://localhost:8080/#token_type=Bearer&access_token=B6THKWOK44JPHM3UHUIM
    this.apikey = "V4AE6W24NH2RURNNKA";
    this.clientsecret = "YYVNVOLAQRPTUKHAS53NKBOD4UW5POTBBL3ZBXBGMUVT5M7PZT";
    this.privatetoken = "JEWHBXVJCBGU2HWD76D2";
    this.publictoken = "IJFSN65CEYRDTZNSUXHD";
    this.orderby = "date";
  }
  // window.location

  async getVenue() {
    console.log('hi')
    const venueResponse = await axios(
      `https://www.eventbriteapi.com/v3/categories/`, 
      {
        headers : {
          'Authorization' : `Bearer ${this.myprivatetoken}`
        }
      }
    );
    console.log(venueResponse);
    // return venue;
  }
}
const Events = () => {
  const events = new EventBrite()
  events.getVenue()
    return (
      <div>
        <h3> </h3>
      </div>
    )
}

export default Events;