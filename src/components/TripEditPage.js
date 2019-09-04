import React from 'react';
import { connect } from 'react-redux';
import TripForm from './TripForm';
import { startEditTrip, startRemoveTrip } from '../actions/trips';
import { startRemoveExpense } from '../actions/expenses';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpensesListFilters';
import RemoveModal from './RemoveModal';

class TripEditPage extends React.Component {
   state = {
      isRemoveClicked: false
   }

   onSubmit = (trip) => {
      this.props.startEditTrip(this.props.trip.id, trip);
   };

   onRemove = () => {
      this.setState(() => ({ isRemoveClicked: true }))
   };

   onRemoveOnModal = () => {
      this.props.expenses.forEach(expense => {
         if (this.props.trip.expenses.includes(expense.id)) {
            this.props.startRemoveExpense(expense.id);
         };
      });

      this.props.startRemoveTrip(this.props.trip.id);
      this.props.history.push('/dashboard');
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
            <TripForm 
               trip={this.props.trip}
               onSubmit={this.onSubmit}
            />
            <div className='content-container'>
               <div className='button-list'>
                  <button className='button button--remove' onClick={this.onRemove}>Remove</button>
                  <button className='button button--back' onClick={this.onCancel}>Back</button>
               </div>
            </div>
            <ExpenseListFilter />
            <ExpenseList trip={this.props.trip} id={this.props.match.params.id}/>
            <RemoveModal 
               isRemoveClicked={this.state.isRemoveClicked}
               onClearModal={this.onClearModal}
               onRemoveOnModal={this.onRemoveOnModal}
            />
         </div>
      );
   };
};

const mapStateToProps = (state, ownProps) => ({
   trip: state.trips.find(trip => trip.id === ownProps.match.params.id),
   expenses: state.expenses
});

const mapDispatchToProps = (dispatch) => ({
   startEditTrip: (id, trip) => dispatch(startEditTrip(id, trip)),
   startRemoveTrip: (id) => dispatch(startRemoveTrip(id)),
   startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TripEditPage);