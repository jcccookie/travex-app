import React from 'react';
import Trip from './Trip';
import { connect } from 'react-redux';
import selectTrips from '../selectors/trips';

const TripList = (props) => (
   <div>
      <h3>Trip List</h3>
      {  
         props.trips.length === 0 ? (
            <span>No Trips</span>
         ) : (
            props.trips.map(trip => {
               return <Trip key={trip.id} {...trip}/>
            })
         )
      }
   </div>
);

const mapStateToProps = (state) => ({
   trips: selectTrips(state.trips, state.tripsFilters)
});

export default connect(mapStateToProps)(TripList);