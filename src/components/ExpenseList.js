import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';

const ExpenseList = (props) => (
   <div>
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
   expenses: state.expenses.filter(expense => ownProps.trip.expenses.includes(expense.id)),
   trip: ownProps.trip
});

export default connect(mapStateToProps)(ExpenseList);