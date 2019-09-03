import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Trip = ({ destination, startDate, endDate, id }) => (
   <Link className='card' to={`/edit/trip/${id}`}>
      <div className='card__body'>
         <h3 className='card__title'>{destination}</h3>
         <p className='card__intro'>
            {
               startDate !== endDate ? (
                  `${moment(startDate).format('MM/DD/YYYY').toString()} - ${moment(endDate).format('MM/DD/YYYY').toString()}`
               ) : (
                  `${moment(startDate).format('MM/DD/YYYY').toString()}`
               )
            }
         </p>
      </div>
   </Link>
);

export default Trip;