import React from 'react';
import numeral from 'numeral';

const ExpenseSummary = (props) => (
   <div>
      <h3>Expense Summary</h3>
         <p>
            You have {props.expenses.length} {props.expenses.length <= 1 ? 'expense' : 'expenses'} totalling {numeral(props.expenses.reduce((acc, expense) => {
               return acc + parseFloat(expense.amount);
            }, 0)).format('$0,0[.]00')}
         </p>
   </div>
);

export default ExpenseSummary;