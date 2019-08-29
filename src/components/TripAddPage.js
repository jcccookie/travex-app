import React from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions/trips';
import TripForm from './TripForm';

class TripAddPage extends React.Component {
   onSubmit = (trip) => {
      this.props.addTrip(trip);
      this.props.history.push('/dashboard');
   };

   render() {
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
   addTrip: (trip) => dispatch(addTrip(trip))
});

export default connect(undefined, mapDispatchToProps)(TripAddPage);