'use strict'

const { default: axios } = require('axios')
const {db, models: {User, Event, Friendship} } = require('../server/db')
// const SeedEvents = require('./seedEvents');
const myprivatetoken = "B6THKWOK44JPHM3UHUIM"; //** */

const allvenueids = [
  99994959, 99948699, 99940489, 99926989, 99925819, 99925639, 99924299,
  99922359, 99869419, 99811989, 99803679, 99763149, 99753429, 99747879,
  99742129, 99437919, 99394999, 99319439, 99319239, 99263149, 99262759,
  99262519, 99262419, 99261789, 99261589, 99219569, 99175819, 99130169,
  99104799, 99063359, 99056869, 99017469, 98973669, 98953279, 98872349,
  98837279, 98774079, 98739569, 98664729, 98490289, 98407349, 98321099,
  98163699, 97932269, 97751009, 97547399, 97539429, 97360289, 97300159,
  97287119, 97285749, 97267079, 97258539, 97252079, 97246549, 97123539,
  97085629, 96927849, 96881509, 96835699, 96681719, 96542669, 96517879,
  96444699, 96397509, 96353939, 96293469, 96279449, 96182829, 96162739,
  96024819, 95844529, 95785989, 95642469, 95346229, 95160339, 95153669,
  95153139, 95082199, 95028589, 94669329, 94668589, 94666869, 94498749,
  94482929, 94480969, 94188679, 94028609, 93860959, 93106589, 92858339,
  92840339, 92453229, 92254369, 92062539, 91923449, 91903819, 91512119,
  91487569, 91400759, 91152449, 91057429, 90989119, 90949249, 90947299,
  90581209, 90567919, 90461129, 90438919, 90054359, 90052689, 90047749,
  90036619, 88179059, 87932719, 87797939, 87589439, 87432329, 87431289,
  87430419, 87353229, 87026629, 86653189, 86495589, 86491789, 86490019,
  86480539, 86460059, 86310129, 86299879, 86293559, 86286839, 86270939,
  86259129, 86252349, 85777319, 84788989, 84625329, 84620639, 84620529,
  84619799, 84597519, 84451279, 84187179, 84062159, 83448859, 83445999,
  83271899, 83269759, 82713759, 82397799, 82199879, 82185799, 81779679,
  81618829, 81467049, 81182079, 81178239, 80828879, 80568129, 80566449,
  80565649, 80564109, 80426469, 80424799, 80421189, 80376969, 80299789,
  79749049, 79560659, 79203129, 78543159, 78541779, 78519529, 78094509,
  78063809, 78059179, 77976849, 77842069, 77823229, 77414179, 77124919,
  76925749, 76840039, 76775219, 76452469, 76451469, 76449869, 76447919,
  75650919, 75221189, 73670139, 73195699, 73168539, 73165439, 72831569,
  72794499, 72626389, 72369889, 68760639, 67500229, 67101239, 66059139,
  64144969, 63105673, 63104911, 63101807, 62614879, 62060475, 61993977,
  61901989, 61736255, 58397049, 57987923, 56629747, 55217629, 54699851,
  53044587, 47585407, 41421445, 38678101, 100633929, 100596269, 100449289,
  100412349, 100405829, 100261949, 100255249, 100250549, 100215329, 100158169,
  100153109, 100128439, 100126229, 100120579, 100096669, 100086589, 100074449,
  100046199, 100003969,
];
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', fistName: 'Cody', lastName: 'Murphy' }),
    User.create({ username: 'murphy', password: '123', firstName: 'Murphy', lastName: 'Cody' }),
    User.create({ username: 'aubrey', password: '123', firstName: 'Aubrey', lastName: 'Aubrey' }),
    User.create({ username: 'stephanie', password: '123', firstName: 'Stephanie', lastName: 'Stephanie' }),
    User.create({ username: 'felica', password: '123', firstName: 'Felicia', lastName: 'Felicia' })
    
  ])
  // const venues = await Promise.all(
  //   allvenueids.map(id => (axios.get(`https://www.eventbriteapi.com/v3/venues/${id}/events/`, {
  //     headers:{
  //       Authorization: `Bearer ${myprivatetoken}`,
  //     },
  //   })).data)
  // )
  const events = await Promise.all([
    Event.create({ data: 'stuff'
    }),
    Event.create({name: 'Fullstack Graduation', description: 'Fullstack Part-Time Cohort Graduation'}),
    Event.create({name: 'Bar Hangout', description: 'Bar hangout with friends from university'}),
    Event.create({name: 'Movie', description: 'Watching the new Marvel film with friends from work'})
  ])

  const friends = await Promise.all([
    Friendship.create({requester: "b107a45b-0ce5-4732-9953-e1aebcdb91c9", requestee: "cccceda6-5357-4246-80e6-64c1b9bbe2a0", status: "confirmed" }),
    Friendship.create({requester: "b107a45b-0ce5-4732-9953-e1aebcdb91c9", requestee: "f9f55392-4fe3-4063-91cb-38117d92b8b6", status: "confirmed" }),
    Friendship.create({requester: "b107a45b-0ce5-4732-9953-e1aebcdb91c9", requestee: "fb93c3ff-12c6-4f6a-84ea-24a5b4904705", status: "confirmed" })
  ])


  console.log(`seeded successfully`)
  
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
    // await SeedEvents();
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
