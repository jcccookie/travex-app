import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import ExpenseSummary from './ExpenseSummary';
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';

const ExpenseList = (props) => (
   <div>
      <ExpenseSummary expenses={props.expenses}/>
      <div className='content-container button-list'>
         <Link className='button button--save--expense' to={`/add/expense/${props.id}`}>Add Expense</Link>
      </div>
      <div className='content-container'>
            {
               props.expenses.length === 0 ? (
                  <div className='list-message'>
                     <span className='list-message--body show-for-desktop'>No Expenses</span>
                  </div>
               ) : (
                  <div>
                     <h3 className='list-header'>Expense List</h3>
                     <div className='card-list'>
                        {props.expenses.map(expense => {
                           return <Expense key={expense.id} {...expense} tripId={props.trip.id}/>
                        })}
                     </div>
                  </div>
               )
            }
         
      </div>
   </div>
);

const mapStateToProps = (state, ownProps) => ({
   expenses: selectExpenses(state.expenses, state.expensesFilters, ownProps.trip),
   trip: ownProps.trip
});

export default connect(mapStateToProps)(ExpenseList);