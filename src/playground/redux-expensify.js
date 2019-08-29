import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
   type: 'ADD_EXPENSE',
   expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
   }
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
   type: 'REMOVE_EXPENSE',
   id
})

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text,
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT',
});
//SORT_BY_DATE
const sortByDate = () => ({
   type: 'SORT_BY_DATE',
})
//SET_START_DATE
const setStartDate = (startDate) => ({
   type: 'SET_START_DATE',
   startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
   type: 'SET_END_DATE',
   endDate
})

//Expense Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_EXPENSE':
         return [
            ...state,
            action.expense
         ];
      case 'REMOVE_EXPENSE':
         return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
         return state.map((expense) => {
            if (expense.id === action.id) {
               return {
                  ...expense,
                  ...action.updates
               };
            } else {
               return expense;
            }
         })
      default: 
         return state;
   }
};

//Filter Reducer
const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         }
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         };
      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy: 'date'
         }
      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.startDate
         }
      case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.endDate
         }
      default:
         return state;
   }
}

//timestamps (milliseconds)
// January 1st 1970 (unix epoch)
//33400, 10, -203

/**
in your filters, startDate and endDate can be undefined. In the case that the startDate or endDate for your filters is undefined, you do not want to filter out any data based on that criteria. If startDate is undefined, typeof startDate !== 'number' will be true, and startDateMatch will be true. 

In the case that you provide a number to startDateMatch, that means that you do want to filter by date. That means that the first part of your or (||) condition will be false and you will be checking for a match with the second part of the condition (whether the expense date comes before or after the start/endDate).

In short, undefined start and end dates will have typeof date !== 'number' be true and let all data pass through the filter (assuming the expense meets the other criteria as well!!). Start dates and end dates with values will have this condition be false, and you will filter the expenses based on createdAt.
 */
//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
   return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b) => {
      if (sortBy = 'date') {
         //descending
         return a.createAt < b.createAt ? 1 : -1;
      } else if (sortBy = 'amount') {
         return a.amount < b.amount ? 1 : -1;
      }
   });
};

//Store creation
const store = createStore(
   combineReducers({  
      expenses: expensesReducer,
      filters: filtersReducer
   })
);

store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 100}));
// store.dispatch(addExpense({ description: 'Book', amount: 200}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


const demoState = {
   expenses: [{
      id: 'sldkjflsd',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
   }],
   filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined,
   }
};

// // Object spreading
// const user = {
//    name: 'Jen',
//    age: 24
// }

// const update = {
//    age: 27
// }

// //Need to have babel plugin installed
// console.log({
//    ...user,
//    age: 25,
//    ...update
// });