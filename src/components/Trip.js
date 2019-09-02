import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Trip = ({ destination, startDate, endDate, id }) => (
   <Link to={`/edit/trip/${id}`}>
      <h3>{destination}</h3>
      <span>{moment(startDate).format('MMM Do, YYYY').toString()} - {moment(endDate).format('MMM Do YYYY').toString()}</span>
   </Link>
);

export default Trip;