import React from 'react';
import { connect } from 'react-redux';
import { startAddTrip } from '../actions/trips';
import TripForm from './TripForm';

class TripAddPage extends React.Component {
   onSubmit = (trip) => {
      this.props.startAddTrip(trip);
      this.props.history.push('/dashboard');
   };

   render () {
      return (
         <div>
            <TripForm 
               onSubmit={this.onSubmit}
            />
         </div>
      );
   };
};

const mapDispatchToProps = (dispatch) => ({
   startAddTrip: (trip) => dispatch(startAddTrip(trip))
});

export default connect(undefined, mapDispatchToProps)(TripAddPage);