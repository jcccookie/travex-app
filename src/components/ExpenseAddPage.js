import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import { addExpenseToTrip } from '../actions/trips';

class ExpenseAddPage extends React.Component {
   onSubmit = (expense) => {
      this.props.addExpense(expense);
      this.props.addExpenseToTrip(this.props.match.params.id, expense.id);
      this.props.history.goBack();
   };

   render () {
      return (
         <div>
            <ExpenseForm 
               onSubmit={this.onSubmit}
            />
         </div>
      );
   };
};

const mapDispatchToProps = (dispatch) => ({
   addExpense: (expense) => dispatch(addExpense(expense)),
   addExpenseToTrip: (tripId, expId) => dispatch(addExpenseToTrip(tripId, expId))
});

export default connect(undefined, mapDispatchToProps)(ExpenseAddPage);