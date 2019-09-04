import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Expense = ({ id, description, amount, startDate, endDate, paidMethod, note, tripId }) => (
   <Link className='card' to={`/trip/${tripId}/edit/expense/${id}`}>
      <div className='card__body'>
         <h3 className='card__title'>{description}</h3>
         <p className='card__intro'>
            {  
               startDate !== endDate ? (
                  `${moment(startDate).format('MM/DD/YYYY')} - ${moment(endDate).format('MM/DD/YYYY')}`
               ) : (
                  `${moment(startDate).format('MM/DD/YYYY')}`
               )
            }
         </p>
         <p className='card__intro'>{numeral(amount).format('$0,0[.]00')}</p>
         <p className='card__intro'>Paid with {paidMethod}</p>
         <p className='card__intro'>
            {
               note !== '' ? (
                  `note: ${note}`
               ) : (
                  ''
               )
            }
         </p>
      </div>
   </Link>
);

export default Expense;