export const addTrip = (trip = {}) => ({
   type: 'ADD_TRIP',
   trip
});

export const editTrip = (id, update) => ({
   type: 'EDIT_TRIP',
   id,
   update
});

export const removeTrip = (id = '') => ({
   type: 'REMOVE_TRIP',
   id
});

export const addExpenseToTrip = (tripId, expId) => ({
   type: 'ADD_EXPENSE_TRIP',
   tripId,
   expId
});

export const removeExpenseFromTrip = (tripId, expId) => ({
   type: 'REMOVE_EXPENSE_TRIP',
   tripId,
   expId
});