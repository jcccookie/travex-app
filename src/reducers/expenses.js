const defaultExpensesState = [];

export default (state = defaultExpensesState, action) => {
   switch (action.type) {
      case 'ADD_EXPENSE':
         return [
            ...state,
            action.expense
         ];
      case 'EDIT_EXPENSE':
         return state.map(expense => {
            if (expense.id === action.id) {
               return {
                  ...expense,
                  ...action.update
               };
            } else {
               return expense;
            };
         });
      case 'REMOVE_EXPENSE':
         return state.filter(expense => expense.id !== action.id);
      case 'SET_EXPENSE':
         return action.expenses
      default:
         return state;
   };
};