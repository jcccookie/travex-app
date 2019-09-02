import database from '../firebase/firebase';

//Add Expense
export const addExpense = (expense = {}) => ({
   type: 'ADD_EXPENSE',
   expense
});

export const startAddExpense = (id = '', expense = {}) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`users/${uid}/expenses`).child(id).set(expense).then(() => {
         dispatch(addExpense({
            id: id,
            ...expense
         }));
      });
   };
};

//Edit Expense
export const editExpense = (id, update) => ({
   type: 'EDIT_EXPENSE',
   id,
   update
});

export const startEditExpense = (id, update) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`users/${uid}/expenses/${id}`).update(update).then(() => {
         dispatch(editExpense(id, update));
      });
   };
};

//Remove Expense
export const removeExpense = (id) => ({
   type: 'REMOVE_EXPENSE',
   id
});

export const startRemoveExpense = (id) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
         dispatch(removeExpense(id));
      });
   };
};

//Retrieve Expenses from database
export const setExpense = (expenses) => ({
   type: 'SET_EXPENSE',
   expenses
});

export const startSetExpense = () => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;

      return database.ref(`/users/${uid}/expenses`).once('value').then(dataSnapshot => {
         const expenses = [];

         dataSnapshot.forEach(childSnapshot => {
            expenses.push({
               id: childSnapshot.key,
               ...childSnapshot.val()
            });
         });

         dispatch(setExpense(expenses));
      });
   };
};