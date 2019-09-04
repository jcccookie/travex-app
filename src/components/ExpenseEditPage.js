import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { startRemoveExpenseFromTrip } from '../actions/trips';
import { connect } from 'react-redux';
import RemoveModal from './RemoveModal'

class ExpenseEditPage extends React.Component {
   state = {
      isRemoveClicked: false
   };

   onSubmit = (expense) => {
      this.props.startEditExpense(this.props.expense.id, expense);
      this.props.history.goBack();
   };

   onRemove = () => {
      this.setState(() => ({ isRemoveClicked: true }));
   };

   onRemoveOnModal = () => {
      const expId = this.props.expense.id;
      const tripId = this.props.match.params.tripId
      this.props.startRemoveExpense(expId);
      this.props.startRemoveExpenseFromTrip(tripId, expId);

      this.props.history.goBack();
   };

   onCancel = () => {
      this.props.history.goBack();
   };

   onClearModal = () => {
      this.setState(() => ({ isRemoveClicked: false }))
   };

   render () {
      return (
         <div>
            <ExpenseForm
               expense={this.props.expense}
               onSubmit={this.onSubmit}
            />
            <div className='content-container'>
               <div className='button-list button-list__edit'>
                  <button className='button button--remove' onClick={this.onRemove}>Remove</button>
                  <button className='button button--cancel' onClick={this.onCancel}>Cancel</button> 
               </div>
            </div>
            <RemoveModal 
               isRemoveClicked={this.state.isRemoveClicked}
               onRemoveOnModal={this.onRemoveOnModal} 
               onClearModal={this.onClearModal}
            />
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