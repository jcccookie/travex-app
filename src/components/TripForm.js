import React from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class TripForm extends React.Component {
   state = {
      destination: this.props.trip ? this.props.trip.destination : '',
      startDate: this.props.trip ? moment(this.props.trip.startDate) : null,
      endDate: this.props.trip ? moment(this.props.trip.endDate) : null,
      createdAt: this.props.trip ? moment(this.props.trip.createdAt) : moment(),
      focusedInput: null,
      expenses: this.props.trip ? this.props.trip.expenses : [],
      error: ''
   };

   onTextChange = (e) => {
      const destination = e.target.value;
      this.setState({ destination });
   };

   onDatesChange = ({ startDate, endDate }) => {
      this.setState({ startDate, endDate });
   };

   onFocusChange = (focusedInput) => {
      this.setState({ focusedInput });
   };

   onSubmit = (e) => {
      e.preventDefault();

      if (this.state.destination === '' || this.state.startDate === null || this.state.endDate === null) {
         this.setState(() => ({
            error: 'Please enter a valid destination or date'
         }));
      } else {
         this.setState(() => ({
            error: ''
         }));
         const trip = {
            destination: this.state.destination,
            startDate: this.state.startDate.valueOf(),
            endDate: this.state.endDate.valueOf(),
            createdAt: this.state.createdAt.valueOf(),
            expenses: this.state.expenses
         };
         this.props.onSubmit(trip);
      };
   };

   render () {
      return (
         <div className='content-container'>
            <h3 className='list-header'>Your Trip</h3>
               <form onSubmit={this.onSubmit}>
                  <div>{this.state.error && <span className='form__error'>{this.state.error}</span>}</div>
                  <div className='input-group'>
                     <div className='input-group__item'>
                        <input 
                           className='text-input'
                           type='text'
                           value={this.state.destination}
                           placeholder='destination'
                           onChange={this.onTextChange} 
                        />
                     </div>
                     <div className='input-group__item'>
                        <DateRangePicker
                           startDate={this.state.startDate}
                           endDate={this.state.endDate} 
                           onDatesChange={this.onDatesChange}
                           focusedInput={this.state.focusedInput} 
                           onFocusChange={this.onFocusChange}
                           showClearDates={true}
                           numberOfMonths={1}
                           isOutsideRange={() => false}
                           minimumNights={0}
                        />
                     </div>
                     <button className='button button--save'>Save Trip</button>
                  </div>
               </form>
         </div>
         
      )
   }
};

export default TripForm;