import React from 'react';
import TripList from './TripList';
import TripListFilter from './TripListFilter';

const DashboardPage = () => (
   <div> 
      <TripListFilter />
      <TripList />
   </div>
);

export default DashboardPage;