// import axios from "axios";
// import React from "react";

// // main page
// // https://www.eventbrite.com/d/ny--new-york/free--food-and-drink--events/?end_date=2022-12-31&page=1&start_date=2022-06-25

// // sample event: https://www.eventbrite.com/e/kimeventbrite-intro-tickets-353140130637

// const auth_token = "";
// const myprivatetoken = "B6THKWOK44JPHM3UHUIM"; //** */
// const apikey = "V4AE6W24NH2RURNNKA";
// const clientsecret = "YYVNVOLAQRPTUKHAS53NKBOD4UW5POTBBL3ZBXBGMUVT5M7PZT";
// const privatetoken = "JEWHBXVJCBGU2HWD76D2";
// const publictoken = "IJFSN65CEYRDTZNSUXHD";
// const alleventids = [
//   238638142107, 297996614897, 241546380727,
//   // 351067681887, 331309223807,
//   // 339272863267, 294282907097, 312103418727, 333911296677, 308177084957,
//   // 336662435407, 156816788235, 252398409437, 238625684847, 338197797717,
//   // 349504446207, 258857318207, 290994060067, 337074738617, 322275202807,
//   // 273102415677, 254721186927, 293952228027, 253478289387, 326723618137,
//   // 341917162437, 345010785547, 317203753967, 341929238557, 346332187897,
//   // 331601959387, 224291250167, 290056806717, 252377787757, 271093095747,
//   // 226726845097, 268164837247, 225122315907, 339028271687, 312399785167,
//   // 354606336097, 354614149467, 294274311387, 209890266437, 290055312247,
//   // 225098354237, 355034928027, 258083844727, 321344669557, 328477333547,
//   // 328413743347, 238475405357, 322775529297, 329217457277, 349872687627,
//   // 314216137927, 195320417627, 308150074167, 330973178687, 289748725237,
//   // 317091789077, 329230105107, 294855529827, 322779721837, 289958382327,
//   // 225112907767, 326380070577, 274573355297, 264146638707, 129380349107,
//   // 289870118327, 137979216551, 349214358547, 356846346027, 251704614277,
//   // 355200844287, 310077428937, 328421025127, 348727311777, 266900706197,
//   // 318614302957, 310152082227, 209877528337, 355189861437, 273954123157,
//   // 256361352707, 355194695897, 351379303957, 342145956767, 351375402287,
//   // 355198296667, 317299931637, 247775943517, 189355646837, 184129334797,
//   // 317775032677, 350015344317, 356640279677, 359942717357, 357749758157,
//   // 356227164037, 352107993487, 352108424777, 356749295747, 358922957227,
//   // 234854705747, 354022720487, 245921817777, 312005806767, 334735271207,
//   // 261579720987, 357767340747, 356761672767, 347748333627, 340453745317,
//   // 207565553157, 336133693927, 311871545187, 311856058867, 336048458987,
//   // 190858832907, 308208809847, 267833616557, 174313615717, 252158822827,
//   // 267840156117, 331567817267, 228447882767, 210040826767, 353254713357,
//   // 347096263267, 348417986577, 273960652687, 354641170287, 356736868577,
//   // 349683702367, 358724523707, 352000351527, 338369742007, 273843281627,
//   // 163700305019, 337627140867, 311424849107, 292587034697, 354958228617,
//   // 252408299017, 253469914337, 253466263417, 261515599197, 290885425137,
//   // 333198374307, 290983538597, 337507563207, 332960161807, 169406153365,
//   // 234628057837, 266889352237, 289841853787, 287728613027, 343480087187,
//   // 227036190357, 331565801237, 271892386447, 310047038037, 289984630837,
//   // 225104051277, 294277089697, 341965908237, 342017101357, 253460937487,
//   // 236253298977, 290958684257, 329237908447, 290007990707, 289911040727,
//   // 339642438677, 292865627977, 262531086547, 321273586947, 349078341717,
//   // 350484828557, 343611590517, 354861188367, 295757507667, 351393085177,
//   // 256341854387, 356361014387, 354827577837, 355198035887, 273959900437,
//   // 350397266657, 351379564737, 351380036147, 351374850637, 93817569877,
//   // 351381380167, 325295486557, 342161102067, 342477688987, 234575941957,
//   // 357560542207, 359605298127, 358772697797, 356871972677, 208268646127,
//   // 232500504267, 358890399847, 355262067407, 352797245057, 355677740697,
//   // 342239526637, 334509716567, 336868612087, 350679079567, 333743514837,
//   // 355646998747, 350073087027, 354624440247, 344450690287, 308215198957,
//   // 175059606997, 257485123937, 166760666643, 310551717547, 332531780507,
//   // 162940482369, 348851122097, 212006596437, 169402975861, 325496497787,
//   // 312952097147, 314795360397, 347401476167, 343098776677, 355232980407,
//   // 356479388447, 354672012537, 319296082177, 335522786687, 337297103717,
// ];

//   //VENUES
//   const allvenueids = [
//   99994959, 99948699, 99940489,
//   // 99926989, 99925819, 99925639, 99924299,
//   // 99922359, 99869419, 99811989, 99803679, 99763149, 99753429, 99747879,
//   // 99742129, 99437919, 99394999, 99319439, 99319239, 99263149, 99262759,
//   // 99262519, 99262419, 99261789, 99261589, 99219569, 99175819, 99130169,
//   // 99104799, 99063359, 99056869, 99017469, 98973669, 98953279, 98872349,
//   // 98837279, 98774079, 98739569, 98664729, 98490289, 98407349, 98321099,
//   // 98163699, 97932269, 97751009, 97547399, 97539429, 97360289, 97300159,
//   // 97287119, 97285749, 97267079, 97258539, 97252079, 97246549, 97123539,
//   // 97085629, 96927849, 96881509, 96835699, 96681719, 96542669, 96517879,
//   // 96444699, 96397509, 96353939, 96293469, 96279449, 96182829, 96162739,
//   // 96024819, 95844529, 95785989, 95642469, 95346229, 95160339, 95153669,
//   // 95153139, 95082199, 95028589, 94669329, 94668589, 94666869, 94498749,
//   // 94482929, 94480969, 94188679, 94028609, 93860959, 93106589, 92858339,
//   // 92840339, 92453229, 92254369, 92062539, 91923449, 91903819, 91512119,
//   // 91487569, 91400759, 91152449, 91057429, 90989119, 90949249, 90947299,
//   // 90581209, 90567919, 90461129, 90438919, 90054359, 90052689, 90047749,
//   // 90036619, 88179059, 87932719, 87797939, 87589439, 87432329, 87431289,
//   // 87430419, 87353229, 87026629, 86653189, 86495589, 86491789, 86490019,
//   // 86480539, 86460059, 86310129, 86299879, 86293559, 86286839, 86270939,
//   // 86259129, 86252349, 85777319, 84788989, 84625329, 84620639, 84620529,
//   // 84619799, 84597519, 84451279, 84187179, 84062159, 83448859, 83445999,
//   // 83271899, 83269759, 82713759, 82397799, 82199879, 82185799, 81779679,
//   // 81618829, 81467049, 81182079, 81178239, 80828879, 80568129, 80566449,
//   // 80565649, 80564109, 80426469, 80424799, 80421189, 80376969, 80299789,
//   // 79749049, 79560659, 79203129, 78543159, 78541779, 78519529, 78094509,
//   // 78063809, 78059179, 77976849, 77842069, 77823229, 77414179, 77124919,
//   // 76925749, 76840039, 76775219, 76452469, 76451469, 76449869, 76447919,
//   // 75650919, 75221189, 73670139, 73195699, 73168539, 73165439, 72831569,
//   // 72794499, 72626389, 72369889, 68760639, 67500229, 67101239, 66059139,
//   // 64144969, 63105673, 63104911, 63101807, 62614879, 62060475, 61993977,
//   // 61901989, 61736255, 58397049, 57987923, 56629747, 55217629, 54699851,
//   // 53044587, 47585407, 41421445, 38678101, 100633929, 100596269, 100449289,
//   // 100412349, 100405829, 100261949, 100255249, 100250549, 100215329, 100158169,
//   // 100153109, 100128439, 100126229, 100120579, 100096669, 100086589, 100074449,
//   // 100046199, 100003969,
// ];

// class EventBrite extends React.Component {
//   // Constructor when instantiated
//   constructor(props) {
//     super(props);
//     // this.state = [];
//     // this.getCategories = this.getCategories.bind(this)
//   }

//   ////// window.location

//   ////// CATEGORIES

//   async getEvents() {
//     console.log("hi");
//     const alleventsfromId = (await Promise.all(
//       alleventids.map((id) =>
//         (axios.get(`https://www.eventbriteapi.com/v3/events/${id}/`, {
//           headers: {
//             Authorization: `Bearer ${myprivatetoken}`,
//           },
//         }))
//       ))
//     ).map(el => el.data);
//     console.log("alleventsfromid", alleventsfromId);

//     const eventId = alleventsfromId.map(el => el.id)
//     console.log('eventId',eventId);

//     // const eventImg = alleventsfromId.map(el => el.logo.url)
//     // console.log('eventImg',eventImg);

//     // const eventName = alleventsfromId.map(el => el.name.text)
//     // console.log('eventName',eventName);

//     // const eventDescription = alleventsfromId.map(el => el.description.text)
//     // console.log('eventDescription',eventDescription);

//     // const eventCategoryId = alleventsfromId.map(el => el.category_id)
//     // console.log('eventCategoryId',eventCategoryId);

//     // const eventFree = alleventsfromId.map(el => el.is_free)
//     // console.log('eventFree?',eventFree);
    
//     // const eventStart = alleventsfromId.map(el => el.start.local)
//     // console.log('eventStart',eventStart);
    
//     // const eventTimezone = alleventsfromId.map(el => el.start.timezone)
//     // console.log('eventTimezone',eventTimezone);

//     // const eventVenue = alleventsfromId.map(el => el.venue_id)
//     // console.log('eventVenueId',eventVenue)
//   }
//   async getCategories() {
//     console.log("hi");
//     const allvenuesfromId = (await Promise.all(
//       allvenueids.map(id => (axios.get(`https://www.eventbriteapi.com/v3/venues/${id}/`, {
//         headers:{
//           Authorization: `Bearer ${myprivatetoken}`,
//         },
//       }))))
//     ).map(e => e.data)
//     console.log('venues',allvenuesfromId);



//     // const venuesToEvents = allvenuesfromId.map(el => el.events)
//     // console.log('venuestoevents',venuesToEvents);

//     // const venuesToNames = venuesToEvents.map(el => {
//     //   return (el.map (e => e.name.text))
//     // })
//     // console.log('venuesToNames',venuesToNames);

//     // const eventCategory = venuesToEvents.map(el => {
//     //   return (el.map (e => e.category_id))
//     // })
//     // console.log('eventCategory',eventCategory);

//     // const eventURL = venuesToEvents.map(el => {
//     //   return (el.map (e => e.url))
//     // })
//     // console.log('eventURL',eventURL);

//     // //logoimage is a src iamge! make sure to put it in an image bracket!
//     // const eventLogoimage = venuesToEvents.map(el => {
//     //   return (el.map (e => e.logo.url))
//     // })
//     // console.log('eventLogoimage',eventLogoimage);
//   // render(){
//   //   return (
//   //     <div>
//   //       {this.getCategories()}
//   //     </div>
//   //   )
//   }
// }

// const Events = () => {
//   const events = new EventBrite();
//   const event = events.getEvents();
//   const categories = events.getCategories();
//   // events.fetchUrl();
//   return (
//     <div>
//       <div>
//         NOT OK
//       </div>
//     </div>
//   );
// };

// export default Events;
// // console.log('venues',allvenuesfromId);

// // VENUES

// /// https://www.eventbriteapi.com/v3/venues/${id}/events/
// // const venuesToEvents = allvenuesfromId.map(el => el.data.events)
// // console.log('venuestoevents',venuesToEvents);

// // const venuesToNames = venuesToEvents.map(el => {
// //   return (el.map (e => {
// //     return e.name.text}))
// // })
// // console.log('venuesToNames',venuesToNames);

// // const eventCategory = venuesToEvents.map(el => {
// //   return (el.map (e => e.category_id))
// // })
// // console.log('eventCategory',eventCategory);

// // const eventURL = venuesToEvents.map(el => {
// //   return (el.map (e => e.url))
// // })
// // console.log('eventURL',eventURL);

// //logoimage is a src iamge! make sure to put it in an image bracket!
// // const eventLogoimage = venuesToEvents.map(el => {
// //   return (el.map (e => e.logo.url))
// // })
// // console.log('eventLogoimage',eventLogoimage);

// // const eventToSummary = venuesToEvents.map(el => {
// //   return (el.map (e => e.summary))
// // })
// // console.log('eventToSummary',eventToSummary);

// // const eventID = venuesToEvents.map(el => {
// //   return (el.map (e => e.id))
// // })
// // console.log('eventID',eventID);

// // const eventDescription = venuesToEvents.map(el => {
// //   return (el.map (e => e.description.text))
// // })
// // console.log('eventDescription',eventDescription);

// // const eventStartLocal = venuesToEvents.map(el => {
// //   return (el.map (e => {
// //     return (e.start.local)}))
// // })
// // console.log('eventStartLocal',eventStartLocal);

// // const eventStartLocation = venuesToEvents.map(el => {
// //   return (el.map (e => {
// //     return (e.start.location)}))
// // })
// // console.log('eventStartLocation',eventStartLocation);

// // const venuesToPagination = allvenuesfromId.map((el) => el.data.pagination);
// // console.log("venuestopagnation", venuesToPagination);
// // }

// ////// CATEGORIES

// // async getCategories() {
// //   console.log("hi");
// //   const venues = (
// //     await axios.get(
// //       // categories
// //       // `https://www.eventbriteapi.com/v3/categories/`,
// //       // venues_id
// //       // `https://www.eventbriteapi.com/v3/venues/${allvenueids[0]}/events/`,
// //       // event id === id
// //       `https://www.eventbriteapi.com/v3/venues/100096669/events/`,
// //       {
// //         headers: {
// //           Authorization: `Bearer ${myprivatetoken}`,
// //         },
// //       }
// //     )
// //   ).data;
// //   console.log('venues',venues);
// //   // console.log(allVenues.map(el => el.name))
// //   return venues;
// // }
// // }

// // const Events = () => {
// //   const events = new EventBrite();
// //   const categories = events.getCategories();
// //   // events.fetchUrl();
// //   return (
// //     <div>
// //       <div>
// //         {/* {categories.eventURL?.map(e => {
// //           return (
// //             <li>{ e}</li>
// //           )
// //         })} */}
// //         NOT OK
// //       </div>
// //     </div>
// //   );
// // };

// // export default Events;

// // import axios from "axios";
// // import React from "react";

// // // main page
// // // https://www.eventbrite.com/d/ny--new-york/free--food-and-drink--events/?end_date=2022-12-31&page=1&start_date=2022-06-25

// // // sample event: https://www.eventbrite.com/e/kimeventbrite-intro-tickets-353140130637

// // const auth_token = "";
// // const myprivatetoken = "B6THKWOK44JPHM3UHUIM"; //** */
// // const apikey = "V4AE6W24NH2RURNNKA";
// // const clientsecret = "YYVNVOLAQRPTUKHAS53NKBOD4UW5POTBBL3ZBXBGMUVT5M7PZT";
// // const privatetoken = "JEWHBXVJCBGU2HWD76D2";
// // const publictoken = "IJFSN65CEYRDTZNSUXHD";
// // const allvenueids = [
// //   99994959, 99948699, 99940489,
// //   // 99926989, 99925819, 99925639, 99924299,
// //   // 99922359, 99869419, 99811989, 99803679, 99763149, 99753429, 99747879,
// //   // 99742129, 99437919, 99394999, 99319439, 99319239, 99263149, 99262759,
// //   // 99262519, 99262419, 99261789, 99261589, 99219569, 99175819, 99130169,
// //   // 99104799, 99063359, 99056869, 99017469, 98973669, 98953279, 98872349,
// //   // 98837279, 98774079, 98739569, 98664729, 98490289, 98407349, 98321099,
// //   // 98163699, 97932269, 97751009, 97547399, 97539429, 97360289, 97300159,
// //   // 97287119, 97285749, 97267079, 97258539, 97252079, 97246549, 97123539,
// //   // 97085629, 96927849, 96881509, 96835699, 96681719, 96542669, 96517879,
// //   // 96444699, 96397509, 96353939, 96293469, 96279449, 96182829, 96162739,
// //   // 96024819, 95844529, 95785989, 95642469, 95346229, 95160339, 95153669,
// //   // 95153139, 95082199, 95028589, 94669329, 94668589, 94666869, 94498749,
// //   // 94482929, 94480969, 94188679, 94028609, 93860959, 93106589, 92858339,
// //   // 92840339, 92453229, 92254369, 92062539, 91923449, 91903819, 91512119,
// //   // 91487569, 91400759, 91152449, 91057429, 90989119, 90949249, 90947299,
// //   // 90581209, 90567919, 90461129, 90438919, 90054359, 90052689, 90047749,
// //   // 90036619, 88179059, 87932719, 87797939, 87589439, 87432329, 87431289,
// //   // 87430419, 87353229, 87026629, 86653189, 86495589, 86491789, 86490019,
// //   // 86480539, 86460059, 86310129, 86299879, 86293559, 86286839, 86270939,
// //   // 86259129, 86252349, 85777319, 84788989, 84625329, 84620639, 84620529,
// //   // 84619799, 84597519, 84451279, 84187179, 84062159, 83448859, 83445999,
// //   // 83271899, 83269759, 82713759, 82397799, 82199879, 82185799, 81779679,
// //   // 81618829, 81467049, 81182079, 81178239, 80828879, 80568129, 80566449,
// //   // 80565649, 80564109, 80426469, 80424799, 80421189, 80376969, 80299789,
// //   // 79749049, 79560659, 79203129, 78543159, 78541779, 78519529, 78094509,
// //   // 78063809, 78059179, 77976849, 77842069, 77823229, 77414179, 77124919,
// //   // 76925749, 76840039, 76775219, 76452469, 76451469, 76449869, 76447919,
// //   // 75650919, 75221189, 73670139, 73195699, 73168539, 73165439, 72831569,
// //   // 72794499, 72626389, 72369889, 68760639, 67500229, 67101239, 66059139,
// //   // 64144969, 63105673, 63104911, 63101807, 62614879, 62060475, 61993977,
// //   // 61901989, 61736255, 58397049, 57987923, 56629747, 55217629, 54699851,
// //   // 53044587, 47585407, 41421445, 38678101, 100633929, 100596269, 100449289,
// //   // 100412349, 100405829, 100261949, 100255249, 100250549, 100215329, 100158169,
// //   // 100153109, 100128439, 100126229, 100120579, 100096669, 100086589, 100074449,
// //   // 100046199, 100003969,
// // ];

// // class EventBrites extends React.Component {
// //   // Constructor when instantiated
// //   constructor(props) {
// //     super(props);
// //     // this.state = [];
// //     // this.getCategories = this.getCategories.bind(this)
// //   }
// // }

// //   ////// window.location
// //   ////// CATEGORIES

// //     const allvenuesfromId = await Promise.all(
// //       allvenueids.map(id => (axios.get(`https://www.eventbriteapi.com/v3/venues/${id}/events/`, {
// //         headers:{
// //           Authorization: `Bearer ${myprivatetoken}`,
// //         },
// //       })))
// //     )
// //     console.log('venues',allvenuesfromId);

// //     const venuesToEvents = allvenuesfromId.map(el => el.data.events)
// //     console.log('venuestoevents',venuesToEvents);

// //     const venuesToNames = venuesToEvents.map(el => {
// //       return (el.map (e => e.name.text))
// //     })
// //     console.log('venuesToNames',venuesToNames);

// //     const eventCategory = venuesToEvents.map(el => {
// //       return (el.map (e => e.category_id))
// //     })
// //     console.log('eventCategory',eventCategory);

// //     const eventURL = venuesToEvents.map(el => {
// //       return (el.map (e => e.url))
// //     })
// //     console.log('eventURL',eventURL);

// //     //logoimage is a src iamge! make sure to put it in an image bracket!
// //     const eventLogoimage = venuesToEvents.map(el => {
// //       return (el.map (e => e.logo.url))
// //     })
// //     console.log('eventLogoimage',eventLogoimage);

// //     // const eventToSummary = venuesToEvents.map(el => {
// //     //   return (el.map (e => e.summary))
// //     // })
// //     // console.log('eventToSummary',eventToSummary);

// //     // const eventID = venuesToEvents.map(el => {
// //     //   return (el.map (e => e.id))
// //     // })
// //     // console.log('eventID',eventID);

// //     // const eventDescription = venuesToEvents.map(el => {
// //     //   return (el.map (e => e.description.text))
// //     // })
// //     // console.log('eventDescription',eventDescription);

// //     // const eventStartLocal = venuesToEvents.map(el => {
// //     //   return (el.map (e => {
// //     //     return (e.start.local)}))
// //     // })
// //     // console.log('eventStartLocal',eventStartLocal);

// //     // const eventStartLocation = venuesToEvents.map(el => {
// //     //   return (el.map (e => {
// //     //     return (e.start.location)}))
// //     // })
// //     // console.log('eventStartLocation',eventStartLocation);

// //     const venuesToPagination = allvenuesfromId.map(el => el.data.pagination)
// //     console.log('venuestopagnation',venuesToPagination);

// //     ////// CATEGORIES

// //   // async getCategories() {
// //   //   console.log("hi");
// //   //   const venues = (
// //   //     await axios.get(
// //   //       // categories
// //   //       // `https://www.eventbriteapi.com/v3/categories/`,
// //   //       // venues_id
// //   //       // `https://www.eventbriteapi.com/v3/venues/${allvenueids[0]}/events/`,
// //   //       // event id === id
// //   //       `https://www.eventbriteapi.com/v3/venues/100096669/events/`,
// //   //       {
// //   //         headers: {
// //   //           Authorization: `Bearer ${myprivatetoken}`,
// //   //         },
// //   //       }
// //   //     )
// //   //   ).data;
// //   //   console.log('venues',venues);
// //   //   // console.log(allVenues.map(el => el.name))
// //   //   return venues;
// //   // }

// // const Events = () => {
// //   // const events = new EventBrite();
// //   // const categories = events.getCategories();
// //   // // events.fetchUrl();
// //   return (
// //     <div>
// //       <div>
// //         {allvenueids.map((el) => {
// //           return <li> ${el} </li>
// //         })}

// //       </div>
// //       <div>
// //        NOT OK
// //       </div>
// //     </div>
// //   );
// // };

// // export default Events;
