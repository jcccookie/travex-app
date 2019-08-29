import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Expense = ({ id, description, amount, date, tripId }) => (
   <Link to={`/trip/${tripId}/expense/${id}`}>
      <h2>{description}</h2>
      <p>{moment(date).format('MM/DD/YYYY')}</p>
      <p>${amount}</p>
   </Link>
);

export default Expense;