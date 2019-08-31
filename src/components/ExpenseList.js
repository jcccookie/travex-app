import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import ExpenseSummary from './ExpenseSummary';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
   <div>
      <ExpenseSummary expenses={props.expenses}/>
      {
         props.expenses.length === 0 ? (
            <span>No Expenses</span>
         ) : (
            props.expenses.map(expense => {
               return <Expense key={expense.id} {...expense} tripId={props.trip.id}/>
            })
         )
      }
   </div>
);

const mapStateToProps = (state, ownProps) => ({
   expenses: selectExpenses(state.expenses, state.expensesFilters, ownProps.trip),
   trip: ownProps.trip
});

export default connect(mapStateToProps)(ExpenseList);