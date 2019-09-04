import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import { startAddExpenseToTrip } from '../actions/trips';

class ExpenseAddPage extends React.Component {

   onSubmit = (expense, expId) => {
      this.props.startAddExpense(expId, expense);
      this.props.startAddExpenseToTrip(this.props.match.params.tripId, expId);
      
      this.props.history.goBack();
   };

   onCancel = () => {
      this.props.history.goBack();
   };

   render () {
      return (
         <div>
            <ExpenseForm 
               onSubmit={this.onSubmit}
            />
            <div className='content-container'>
               <button className='button button--cancel' onClick={this.onCancel}>Cancel</button>
            </div>
         </div>
      );
   };
};

const mapDispatchToProps = (dispatch) => ({
   startAddExpense: (expId, expense) => dispatch(startAddExpense(expId, expense)),
   startAddExpenseToTrip: (tripId, expId) => dispatch(startAddExpenseToTrip(tripId, expId))
});

export default connect(undefined, mapDispatchToProps)(ExpenseAddPage);