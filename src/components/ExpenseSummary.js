import React from 'react';
import numeral from 'numeral';


const ExpenseSummary = (props) => (
   <div className='content-container'>
      <h3 className='list-header'>Expense Summary</h3>
         <p className='list-content'>
            {
               props.expenses.length > 0 ? (
                  `You have ${props.expenses.length} ${props.expenses.length <= 1 ? 'expense' : 'expenses'} totalling ${numeral(props.expenses.reduce((acc, expense) => {
                     return acc + parseFloat(expense.amount);
                  }, 0)).format('$0,0[.]00')}`
               ) : (
                  ''
               )
            }
         </p>
   </div>
);

export default ExpenseSummary;