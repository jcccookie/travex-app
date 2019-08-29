export const addExpense = (expense = {}) => ({
   type: 'ADD_EXPENSE',
   expense
});

export const editExpense = (id, update) => ({
   type: 'EDIT_EXPENSE',
   id,
   update
});

export const removeExpense = (id) => ({
   type: 'REMOVE_EXPENSE',
   id
});