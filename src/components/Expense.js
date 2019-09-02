import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Expense = ({ id, description, amount, startDate, endDate, paidMethod, note, tripId }) => (
   <Link to={`/trip/${tripId}/edit/expense/${id}`}>
      <h3>{description}</h3>
      <p>{moment(startDate).format('MM/DD/YYYY')} - {moment(endDate).format('MM/DD/YYYY')}</p>
      <p>{numeral(amount).format('$0,0[.]00')}</p>
      <p>{paidMethod}</p>
      <p>note: {note}</p>
   </Link>
);

export default Expense;