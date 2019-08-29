import selectExpensesTotal from '../selectors/expenses-total';

const expenses = [
   {
      id: '1',
      amount: 195
   },
   {
      id: '2',
      amount: 109600
   },
   {
      id: '3',
      amount: 4500
   }
]

const total = selectExpensesTotal(expenses);

console.log(total);