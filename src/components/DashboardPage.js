import React from 'react';
import TripList from './TripList';
import TripListFilter from './TripListFilter';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
   <div> 
      <TripListFilter />
      <TripList />
      <Link to='/create'>Add your trip</Link>
   </div>
);

export default DashboardPage;