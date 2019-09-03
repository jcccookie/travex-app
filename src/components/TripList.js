import React from 'react';
import Trip from './Trip';
import { connect } from 'react-redux';
import selectTrips from '../selectors/trips';
import { Link } from 'react-router-dom';

const TripList = (props) => (
   <div className='content-container'>
      <div className='list'>
         <h3 className='list-header'>Trip List</h3>
         <Link className='button button--add' to='/create'>Add Trip</Link>
      </div>
      <div className='card-list'>
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
   </div>
);

const mapStateToProps = (state) => ({
   trips: selectTrips(state.trips, state.tripsFilters)
});

export default connect(mapStateToProps)(TripList);