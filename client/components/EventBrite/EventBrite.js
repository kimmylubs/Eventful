import axios from "axios";
import React from "react";

// main page
// https://www.eventbrite.com/d/ny--new-york/free--food-and-drink--events/?end_date=2022-12-31&page=1&start_date=2022-06-25

// sample event: https://www.eventbrite.com/e/kimeventbrite-intro-tickets-353140130637

const auth_token = "";
const myprivatetoken = "B6THKWOK44JPHM3UHUIM";
const apikey = "V4AE6W24NH2RURNNKA";
const clientsecret = "YYVNVOLAQRPTUKHAS53NKBOD4UW5POTBBL3ZBXBGMUVT5M7PZT";
const privatetoken = "JEWHBXVJCBGU2HWD76D2";
const publictoken = "IJFSN65CEYRDTZNSUXHD";

class EventBrite extends React.Component {
  // Constructor when instantiated
  constructor(props) {
    super(props);
    // this.state = [];
    // this.getCategories = this.getCategories.bind(this)
  }
  // window.location
  async getCategories() {
    console.log("hi");
    const categoriesResponse = (
      await axios.get(`https://www.eventbriteapi.com/v3/categories/`, {
        headers: {
          Authorization: `Bearer ${privatetoken}`,
        },
      })
    ).data.categories;
    console.log(categoriesResponse);
    console.log(categoriesResponse.map(el => el.name))
    return categoriesResponse;
  }
  // render() {
  //   return (
  //     <div>
  //       {venue.r}
  //     </div>
  //   )
  // }
  // async getFoodAndDrink() {
  //   console.log('hi')
  //   const venueResponse = await axios(
  //     `https://www.eventbriteapi.com/v3/categories/110/`,
  //     {
  //       headers : {
  //         'Authorization' : `Bearer ${this.myprivatetoken}`
  //       }
  //     }
  //   );
  //   console.log(venueResponse);
  //   // return venue;
  // }
  // async getTravelAndOutdoor() {
  //   console.log('hi')
  //   const venueResponse = await axios(
  //     `https://www.eventbriteapi.com/v3/categories/109/`,
  //     {
  //       headers : {
  //         'Authorization' : `Bearer ${this.myprivatetoken}`
  //       }
  //     }
  //   );
  //   console.log(venueResponse);
  //   // return venue;
  // }
  // async getSeasonalAndHoliday() {
  //   console.log('hi')
  //   const venueResponse = await axios(
  //     `https://www.eventbriteapi.com/v3/categories/116/`,
  //     {
  //       headers : {
  //         'Authorization' : `Bearer ${this.myprivatetoken}`
  //       }
  //     }
  //   );
  //   console.log(venueResponse);
  //   // return venue;
  // }
}

const Events = () => {
  const events = new EventBrite();
  const categories = events.getCategories();
  return (
    <div>
      <div>
        {categories.name?.map(el => {
          return (
            <p>{el} </p>
            )})}
        OK
      </div>
    </div>
  );
};

export default Events;
