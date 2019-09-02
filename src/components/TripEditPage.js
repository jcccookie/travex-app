import React from 'react';
import { connect } from 'react-redux';
import TripForm from './TripForm';
import { startEditTrip, startRemoveTrip } from '../actions/trips';
import { startRemoveExpense } from '../actions/expenses';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpensesListFilters';
import { Link } from 'react-router-dom';

class TripEditPage extends React.Component {
   onSubmit = (trip) => {
      this.props.startEditTrip(this.props.trip.id, trip);
      this.props.history.push('/dashboard');
   };

   onRemove = () => {
      // remove expenses that match to trip 
      this.props.expenses.forEach(expense => {
         if (this.props.trip.expenses.includes(expense.id)) {
            this.props.startRemoveExpense(expense.id);
         };
      }); 
      // remove trip
      this.props.startRemoveTrip(this.props.trip.id); 
      this.props.history.push('/dashboard');
   };

   render () {
      return (
         <div>
            <h3>Your Trip</h3>
            <TripForm 
               trip={this.props.trip}
               onSubmit={this.onSubmit}
            />
            <button
               onClick={this.onRemove}
            >Remove Trip</button>
            <ExpenseListFilter />
            <Link to={`/add/expense/${this.props.match.params.id}`}>Add Expense</Link>
            <ExpenseList trip={this.props.trip}/>
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