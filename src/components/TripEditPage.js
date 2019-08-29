import React from 'react';
import { connect } from 'react-redux';
import TripForm from './TripForm';
import { editTrip, removeTrip } from '../actions/trips';
import ExpenseList from './ExpenseList';
import { Link } from 'react-router-dom';

class TripEditPage extends React.Component {
   onSubmit = (trip) => {
      this.props.editTrip(this.props.trip.id, trip);
      this.props.history.push('/dashboard');
   };

   onRemove = () => {
      this.props.removeTrip(this.props.trip.id);
      this.props.history.push('/dashboard');
   };

   render () {
      return (
         <div>
            <TripForm 
               trip={this.props.trip}
               onSubmit={this.onSubmit}
            />
            <button
               onClick={this.onRemove}
            >Remove Trip</button>
            <ExpenseList trip={this.props.trip}/>
            <Link to={`/add/${this.props.match.params.id}`}>Add Expense</Link>
         </div>
      );
   };
};

const mapStateToProps = (state, ownProps) => ({
   trip: state.trips.find(trip => trip.id === ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
   editTrip: (id, trip) => dispatch(editTrip(id, trip)),
   removeTrip: (id) => dispatch(removeTrip(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TripEditPage);