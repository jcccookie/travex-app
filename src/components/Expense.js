import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Expense = ({ id, description, amount, date, paidMethod, note, tripId }) => (
   <Link to={`/trip/${tripId}/edit/expense/${id}`}>
      <h2>{description}</h2>
      <p>{moment(date).format('MM/DD/YYYY')}</p>
      <p>{numeral(amount).format('$0,0[.]00')}</p>
      <p>{paidMethod}</p>
      <p>note: {note}</p>
   </Link>
);

export default Expense;