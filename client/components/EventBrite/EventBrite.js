import axios from "axios";
import React from "react";

// main page
// https://www.eventbrite.com/d/ny--new-york/free--food-and-drink--events/?end_date=2022-12-31&page=1&start_date=2022-06-25

// sample event: https://www.eventbrite.com/e/kimeventbrite-intro-tickets-353140130637

const auth_token = "";
const myprivatetoken = "B6THKWOK44JPHM3UHUIM"; //** */
const apikey = "V4AE6W24NH2RURNNKA";
const clientsecret = "YYVNVOLAQRPTUKHAS53NKBOD4UW5POTBBL3ZBXBGMUVT5M7PZT";
const privatetoken = "JEWHBXVJCBGU2HWD76D2";
const publictoken = "IJFSN65CEYRDTZNSUXHD";
const allvenueids = [
  99994959, 99948699, 99940489, 
  // 99926989, 99925819, 99925639, 99924299,
  // 99922359, 99869419, 99811989, 99803679, 99763149, 99753429, 99747879,
  // 99742129, 99437919, 99394999, 99319439, 99319239, 99263149, 99262759,
  // 99262519, 99262419, 99261789, 99261589, 99219569, 99175819, 99130169,
  // 99104799, 99063359, 99056869, 99017469, 98973669, 98953279, 98872349,
  // 98837279, 98774079, 98739569, 98664729, 98490289, 98407349, 98321099,
  // 98163699, 97932269, 97751009, 97547399, 97539429, 97360289, 97300159,
  // 97287119, 97285749, 97267079, 97258539, 97252079, 97246549, 97123539,
  // 97085629, 96927849, 96881509, 96835699, 96681719, 96542669, 96517879,
  // 96444699, 96397509, 96353939, 96293469, 96279449, 96182829, 96162739,
  // 96024819, 95844529, 95785989, 95642469, 95346229, 95160339, 95153669,
  // 95153139, 95082199, 95028589, 94669329, 94668589, 94666869, 94498749,
  // 94482929, 94480969, 94188679, 94028609, 93860959, 93106589, 92858339,
  // 92840339, 92453229, 92254369, 92062539, 91923449, 91903819, 91512119,
  // 91487569, 91400759, 91152449, 91057429, 90989119, 90949249, 90947299,
  // 90581209, 90567919, 90461129, 90438919, 90054359, 90052689, 90047749,
  // 90036619, 88179059, 87932719, 87797939, 87589439, 87432329, 87431289,
  // 87430419, 87353229, 87026629, 86653189, 86495589, 86491789, 86490019,
  // 86480539, 86460059, 86310129, 86299879, 86293559, 86286839, 86270939,
  // 86259129, 86252349, 85777319, 84788989, 84625329, 84620639, 84620529,
  // 84619799, 84597519, 84451279, 84187179, 84062159, 83448859, 83445999,
  // 83271899, 83269759, 82713759, 82397799, 82199879, 82185799, 81779679,
  // 81618829, 81467049, 81182079, 81178239, 80828879, 80568129, 80566449,
  // 80565649, 80564109, 80426469, 80424799, 80421189, 80376969, 80299789,
  // 79749049, 79560659, 79203129, 78543159, 78541779, 78519529, 78094509,
  // 78063809, 78059179, 77976849, 77842069, 77823229, 77414179, 77124919,
  // 76925749, 76840039, 76775219, 76452469, 76451469, 76449869, 76447919,
  // 75650919, 75221189, 73670139, 73195699, 73168539, 73165439, 72831569,
  // 72794499, 72626389, 72369889, 68760639, 67500229, 67101239, 66059139,
  // 64144969, 63105673, 63104911, 63101807, 62614879, 62060475, 61993977,
  // 61901989, 61736255, 58397049, 57987923, 56629747, 55217629, 54699851,
  // 53044587, 47585407, 41421445, 38678101, 100633929, 100596269, 100449289,
  // 100412349, 100405829, 100261949, 100255249, 100250549, 100215329, 100158169,
  // 100153109, 100128439, 100126229, 100120579, 100096669, 100086589, 100074449,
  // 100046199, 100003969,
];

class EventBrite extends React.Component {
  // Constructor when instantiated
  constructor(props) {
    super(props);
    // this.state = [];
    // this.getCategories = this.getCategories.bind(this)
  }

  ////// window.location
  ////// CATEGORIES

  async getCategories() {
    console.log("hi");
    const allvenuesfromId = await Promise.all(
      allvenueids.map(id => (axios.get(`https://www.eventbriteapi.com/v3/venues/${id}/events/`, {
        headers:{
          Authorization: `Bearer ${myprivatetoken}`,
        },
      })))
    )
    console.log('venues',allvenuesfromId);

    const venuesToEvents = allvenuesfromId.map(el => el.data.events)
    console.log('venuestoevents',venuesToEvents);

    const venuesToNames = venuesToEvents.map(el => {
      return (el.map (e => e.name.text))
    })
    console.log('venuesToNames',venuesToNames);

    const eventCategory = venuesToEvents.map(el => {
      return (el.map (e => e.category_id))
    })
    console.log('eventCategory',eventCategory);

    const eventURL = venuesToEvents.map(el => {
      return (el.map (e => e.url))
    })
    console.log('eventURL',eventURL);
    
    //logoimage is a src iamge! make sure to put it in an image bracket!
    const eventLogoimage = venuesToEvents.map(el => {
      return (el.map (e => e.logo.url))
    })
    console.log('eventLogoimage',eventLogoimage);

    const eventInpersonOnline = venuesToEvents.map(el => {
      return (el.map (e => e.online_event))
    })
    console.log('eventInpersonOnline',eventInpersonOnline);

    // const eventID = venuesToEvents.map(el => {
    //   return (el.map (e => e.id))
    // })
    // console.log('eventID',eventID);

    // const eventDescription = venuesToEvents.map(el => {
    //   return (el.map (e => e.description.text))
    // })
    // console.log('eventDescription',eventDescription);

    // const eventStartLocal = venuesToEvents.map(el => {
    //   return (el.map (e => {
    //     return (e.start.local)}))
    // })
    // console.log('eventStartLocal',eventStartLocal);

    // const eventStartLocation = venuesToEvents.map(el => {
    //   return (el.map (e => {
    //     return (e.start.location)}))
    // })
    // console.log('eventStartLocation',eventStartLocation);

    const venuesToPagination = allvenuesfromId.map(el => el.data.pagination)
    console.log('venuestoevents',venuesToPagination);
  }

    ////// CATEGORIES

  // async getCategories() {
  //   console.log("hi");
  //   const venues = (
  //     await axios.get(
  //       // categories
  //       // `https://www.eventbriteapi.com/v3/categories/`,
  //       // venues_id
  //       // `https://www.eventbriteapi.com/v3/venues/${allvenueids[0]}/events/`,
  //       // event id === id
  //       `https://www.eventbriteapi.com/v3/venues/100096669/events/`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${myprivatetoken}`,
  //         },
  //       }
  //     )
  //   ).data;
  //   console.log('venues',venues);
  //   // console.log(allVenues.map(el => el.name))
  //   return venues;
  // }

}

const Events = () => {
  const events = new EventBrite();
  const categories = events.getCategories();
  // events.fetchUrl();
  return (
    <div>
      <div>
        {categories.name?.map((el) => {
          return <p>{el} </p>;
        })}
        OK
      </div>
    </div>
  );
};

export default Events;
