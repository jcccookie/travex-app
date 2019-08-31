import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setStartDateFilter, setEndDateFilter, sortByName, sortByNewest, sortByOldest, sortByStartFirst, sortByStartLate } from '../actions/tripsFilters';
import { DateRangePicker } from 'react-dates';

class TripListFilter extends React.Component {
   state = {
      focusedInput: null,
   };

   onTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
   };

   onDatesChange = ({ startDate, endDate} ) => {
      this.props.setStartDateFilter(startDate);
      this.props.setEndDateFilter(endDate);
   };

   onFocusChange = (focusedInput) => {
      this.setState({ focusedInput });
   };

   onSortChange = (e) => {
      if (e.target.value === 'name') {
         this.props.sortByName();
      } else if (e.target.value === 'startFirst') {
         this.props.sortByStartFirst();
      } else if (e.target.value === 'startLate') {
         this.props.sortByStartLate();
      } else if (e.target.value === 'newest') {
         this.props.sortByNewest();
      } else if (e.target.value === 'oldest') {
         this.props.sortByOldest();
      };
   };

   render () {
      return (
         <div>
            <h3>Trip Filter</h3>
            <input 
               type='text'
               placeholder='Search by destination'
               onChange={this.onTextChange}
            />
            <DateRangePicker
               startDate={this.props.tripsFilters.startDate}
               endDate={this.props.tripsFilters.endDate}
               onDatesChange={this.onDatesChange}
               focusedInput={this.state.focusedInput}
               onFocusChange={this.onFocusChange}
               numberOfMonths={1}
               minimumNights={0}
               isOutsideRange={() => false}
               showClearDates={true}
            />
            <select
               value={this.props.tripsFilters.sortBy}
               onChange={this.onSortChange}
            >
               <option value='name'>name</option>
               {/* <option>amount</option> */}
               <option value='startFirst'>start first</option>
               <option value='startLate'>start late</option>
               <option value='newest'>newest created</option>
               <option value='oldest'>oldest created</option>
            </select>
         </div>
      );
   };
};

const mapStateToProps = (state) => ({
   tripsFilters: state.tripsFilters
});

const mapDispatchToProps = (dispatch) => ({
   setTextFilter: (text) => dispatch(setTextFilter(text)),
   setStartDateFilter: (date) => dispatch(setStartDateFilter(date)),
   setEndDateFilter: (date) => dispatch(setEndDateFilter(date)),
   sortByName: () => dispatch(sortByName()),
   sortByNewest: () => dispatch(sortByNewest()),
   sortByOldest: () => dispatch(sortByOldest()),
   sortByStartFirst: () => dispatch(sortByStartFirst()),
   sortByStartLate: () => dispatch(sortByStartLate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListFilter);