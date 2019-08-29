const tripsReducerDefaultState = [];

export default (state = tripsReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_TRIP':
         return [
            ...state,
            action.trip
         ];
      case 'EDIT_TRIP':
         return state.map(trip => {
            if (trip.id === action.id) {
               return {
                  ...trip,
                  ...action.update
               };
            } else {
               return trip;
            }
         })
      case 'REMOVE_TRIP':
         return state.filter(trip => {
            return trip.id !== action.id
         });
      case 'ADD_EXPENSE_TRIP':
         return state.map(trip => {
            if (trip.id === action.tripId) {
               return {
                  ...trip,
                  expenses: [
                     ...trip.expenses,
                     action.expId
                  ]
               };
            } else {
               return trip;
            };
         })
      case 'REMOVE_EXPENSE_TRIP':
         return state.map(trip => {
            if (trip.id === action.tripId) {
               return {
                  ...trip,
                  expenses: [
                     ...trip.expenses.filter(expense => expense !== action.expId)
                  ]
               };
            } else {
               return trip;
            };
         });
      default:
         return state;
   };
};