import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { removeExpenseFromTrip } from '../actions/trips';
import { connect } from 'react-redux';

class ExpenseEditPage extends React.Component {

   onSubmit = (expense) => {
      this.props.editExpense(this.props.expense.id, expense);

      this.props.history.goBack();
   };

   onRemove = () => {
      const expId = this.props.expense.id;
      const tripId = this.props.match.params.tripId
      this.props.removeExpense(expId);
      this.props.removeExpenseFromTrip(tripId, expId);

      this.props.history.goBack();
   };

   render () {
      return (
         <div>
            <ExpenseForm
               expense={this.props.expense}
               onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove Expense</button>
         </div>
      );
   };
};

const mapStateToProps = (state, ownProps) => ({
   expense: state.expenses.find(expense => expense.id === ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
   editExpense: (id, update) => dispatch(editExpense(id, update)),
   removeExpense: (id) => dispatch(removeExpense(id)),
   removeExpenseFromTrip: (tripId, expId) => dispatch(removeExpenseFromTrip(tripId, expId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEditPage);