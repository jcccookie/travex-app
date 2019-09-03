import database from '../firebase/firebase';

//Add Trip
export const addTrip = (trip = {}) => ({
   type: 'ADD_TRIP',
   trip
});

export const startAddTrip = (tripData = {}) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const { destination = '', startDate = 0, endDate = 0, createdAt = 0, expenses = [] } = tripData;
      const trip = { destination, startDate, endDate, createdAt, expenses };

      return database.ref(`users/${uid}/trips`).push(trip).then((ref) => {
         dispatch(addTrip({
            id: ref.key,
            ...trip
         }));
      });
   };
};

//Edit Trip
export const editTrip = (id, update) => ({
   type: 'EDIT_TRIP',
   id,
   update
});

export const startEditTrip = (id, update) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      
      return database.ref(`users/${uid}/trips/${id}`).update(update).then(() => {
         dispatch(editTrip(id, update));
      });
   };
};

//Remove Trip
export const removeTrip = (id = '') => ({
   type: 'REMOVE_TRIP',
   id
});

export const startRemoveTrip = (id = '') => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`/users/${uid}/trips/${id}`).remove().then(() => {
         dispatch(removeTrip(id));
      });
   };
};

//Add Expenses to Trip
export const addExpenseToTrip = (tripId, expId) => ({
   type: 'ADD_EXPENSE_TRIP',
   tripId,
   expId
});

export const startAddExpenseToTrip = (tripId, expId) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`users/${uid}/trips/${tripId}`).child(`expenses/${expId}`).push(expId).then(() => {
         dispatch(addExpenseToTrip(tripId, expId));
      });
   };
};

//Remove Expenses from Trip
export const removeExpenseFromTrip = (tripId, expId) => ({
   type: 'REMOVE_EXPENSE_TRIP',
   tripId,
   expId
});

export const startRemoveExpenseFromTrip = (tripId, expId) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`users/${uid}/trips/${tripId}/expenses/${expId}`).remove().then(() => {
         dispatch(removeExpenseFromTrip(tripId, expId));
      });
   };
};

//Retrieve Trips from database
export const setTrip = (trips) => ({
   type: 'SET_TRIP',
   trips
})

export const startSetTrip = () => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`/users/${uid}/trips`).once('value').then(dataSnapshot => {
         const trips = [];
         
         dataSnapshot.forEach(childSnapshot => {
            //Convert the expenses from database in object form into array form; Need to do this to loop through the expenses easily
            const expenses = [];
            childSnapshot.child('expenses').forEach(expense => {
               expenses.push(expense.key)
            })

            trips.push({
               id: childSnapshot.key,
               destination: childSnapshot.child('destination').val(),
               createdAt: childSnapshot.child('createdAt').val(),
               startDate: childSnapshot.child('startDate').val(),
               endDate: childSnapshot.child('endDate').val(),
               expenses: childSnapshot.hasChild('expenses') ? expenses : [] // To prevent from copying the expenses to all trips
            });
         });

         dispatch(setTrip(trips));
      });
   };
};