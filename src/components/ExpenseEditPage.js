import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { startRemoveExpenseFromTrip } from '../actions/trips';
import { connect } from 'react-redux';

class ExpenseEditPage extends React.Component {

   onSubmit = (expense) => {
      this.props.startEditExpense(this.props.expense.id, expense);

      this.props.history.goBack();
   };

   onRemove = () => {
      const expId = this.props.expense.id;
      const tripId = this.props.match.params.tripId
      this.props.startRemoveExpense(expId);
      this.props.startRemoveExpenseFromTrip(tripId, expId);

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
   expense: state.expenses.find(expense => expense.id === ownProps.match.params.expId)
});

const mapDispatchToProps = (dispatch) => ({
   startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
   startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
   startRemoveExpenseFromTrip: (tripId, expId) => dispatch(startRemoveExpenseFromTrip(tripId, expId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEditPage);