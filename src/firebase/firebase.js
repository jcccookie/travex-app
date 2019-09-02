import * as firebase from "firebase";

var firebaseConfig = {
   apiKey: process.env.FIREBASE_API_KEY,
   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.FIREBASE_DATABASE_URL,
   projectId: process.env.FIREBASE_PROJECT_ID,
   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.FIREBASE_APP_ID
 };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };










// REFERENCE for Firebase
// ---------------------------------------

// // child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//    console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//    console.log(snapshot.key, snapshot.val());
// })

// // child_added, also called existing ones
// database.ref('expenses').on('child_added', snapshot => {
//    console.log(snapshot.key, snapshot.val());
// })




// ---------------------------------------

// database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });

//       console.log(expenses);
//    });

// database.ref('expenses')
//    .on('value', snapshot => {
//       const expenses = [];

//       snapshot.forEach(childSnapshot => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });
//       console.log(expenses);
//    });





// ---------------------------------------





// database.ref('expenses').push({
//    description: 'Rent',
//    note: 'rent for August',
//    amount: 100,
//    createdAt: 1
// });

// database.ref('expenses').push({
//    description: 'Phone bill',
//    note: 'August',
//    amount: 590,
//    createdAt: 2
// });

// database.ref('expenses').push({
//    description: 'Gas',
//    note: 'August',
//    amount: 120,
//    createdAt: 3
// });



// database.ref('notes/-Lly7hK74bdUvdhm2FA_').update({
//    body: 'Buy Foods'
// })


// database.ref('notes').push({
//    title: 'Course Topics',
//    body: 'React Native'
// });


// const firebaseNotes = {
//    notes: {
//       sldkfj: {
//          title: 'First note',
//          body: 'This is my note'
//       },
//       sldkfjlskdjf: {
//          title: 'Another note',
//          body: 'This is my note'
//       }
//    }
// };

// const notes = [{
//    id: '12',
//    title: 'First note',
//    body: 'This is my note'
// }, {
//    id: '761ase',
//    title: 'Another note',
//    body: 'This is my note'
// }];

// database.ref('notes').set(notes);


//---------------------------------------------------

// database.ref().on('value', snapshot => {
//    const val = snapshot.val()
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

//  //subscribe fetching
//  const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
//  }, (e) => {
//     console.log('Error with data fetching', e);
//  });

//  setTimeout(() => {
//    database.ref('age').set(28);
//  }, 3500);

//  setTimeout(() => {
//    database.ref().off(onValueChange); //unsubscribe fetching
//  }, 7000);



//  setTimeout(() => {
//    database.ref('age').set(35);
//  }, 10500);
// database.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//    })
//    .catch((e) => {
//       console.log('Error fetching data', e);
//    });

//-------------------------------------------------------------------

//  database.ref().set({
//    name: 'Nathan Kim',
//    age: 30,
//    stressLevel: 6,
//    job: {
//       title: 'Software Developer',
//       company: 'Google'
//    },
//    isSingle: true,
//    location: {
//       city: 'Los Angeles',
//       country: 'United States'
//    }
//  }).then(() => {
//     console.log('Data is saved');
//  }).catch((e) => {
//     console.log('This failed: ', e);
//  });

//  database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
//  });

// database.ref().update({
//    job: 'Manager',
//    'location/city': 'Boston'
// });

 //equals to remove
//  database.ref('isSingle').set(null);

// //  database.ref('age').set(27);
// //  database.ref('location/city').set('Portland');

//  database.ref('attribute').set({
//     height: 73,
//     weight: 150
//  }).then(() => {
//     console.log('Attributes added');
//  }).catch((e) => {
//     console.log('Error occurred: ', e);
//  });

// database.ref('isSingle')
// .remove()
// .then(() => {
//    console.log('isSingle removed');
// }).catch((e) => {
//    console.log('Error occurred: ', e);
// });