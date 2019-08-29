import React from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import uuid from 'uuid';

class TripForm extends React.Component {
   state = {
      id: this.props.trip ? this.props.trip.id : uuid(),
      destination: this.props.trip ? this.props.trip.destination : '',
      startDate: this.props.trip ? this.props.trip.startDate : null,
      endDate: this.props.trip ? this.props.trip.endDate : null,
      createdAt: this.props.trip ? this.props.trip.createdAt : moment(),
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
            id: this.state.id,
            destination: this.state.destination,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            createdAt: this.state.createdAt,
            expenses: this.state.expenses
         };
         this.props.onSubmit(trip);
      };
   };

   render () {
      return (
         <form onSubmit={this.onSubmit}>
            <div>{this.state.error && <span>{this.state.error}</span>}</div>
            <input 
               type='text'
               value={this.state.destination}
               autoFocus
               placeholder='destination'
               onChange={this.onTextChange} 
            />
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
            <button>Save Trip</button>
         </form>
      )
   }
};

export default TripForm;