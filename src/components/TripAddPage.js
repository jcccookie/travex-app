import React from 'react';
import { connect } from 'react-redux';
import { startAddTrip } from '../actions/trips';
import TripForm from './TripForm';

class TripAddPage extends React.Component {
   onSubmit = (trip) => {
      this.props.startAddTrip(trip);
      this.props.history.push('/dashboard');
   };

   onCancel = () => {
      this.props.history.goBack();
   };

   render () {
      return (
         <div>
            <TripForm 
               onSubmit={this.onSubmit}
            />
            <button onClick={this.onCancel}>Cancel</button>
         </div>
      );
   };
};

const mapDispatchToProps = (dispatch) => ({
   startAddTrip: (trip) => dispatch(startAddTrip(trip))
});

export default connect(undefined, mapDispatchToProps)(TripAddPage);