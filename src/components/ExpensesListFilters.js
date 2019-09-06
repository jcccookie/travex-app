import React from 'react';
import { connect } from 'react-redux';
import { setDescNoteFilter, setStartFilter, setEndFilter, setMethodFilter, sortByAmountHigh, sortByAmountLow, sortByNewestDate, sortByOldestDate, sortByExpenseName } from '../actions/expensesFilters';
import { DateRangePicker } from 'react-dates';

class ExpensesListFilter extends React.Component {
   state = {
      focusedInput: null,
   };

   onDescriptionChange = (e) => {
      this.props.setDescNoteFilter(e.target.value);
   };

   onDatesChange = ({ startDate, endDate} ) => {
      this.props.setStartFilter(startDate);
      this.props.setEndFilter(endDate);
   };

   onFocusChange = (focusedInput) => {
      this.setState({ focusedInput });
   };

   onMethodChange = (e) => {
      this.props.setMethodFilter(e.target.value);
   };

   onSortChange = (e) => {
      const input = e.target.value;
      if (input === 'highest') {
         this.props.sortByAmountHigh(); 
      } else if (input === 'lowest'){
         this.props.sortByAmountLow();
      } else if (input === 'newest') {
         this.props.sortByNewestDate();
      } else if (input === 'oldest') {
         this.props.sortByOldestDate(); 
      } else if (input === 'name') {
         this.props.sortByExpenseName();
      };
   };

   render () {
      return (
         <div className='content-container'>
            <h3 className='list-header'>Expense Filter</h3>
            <div className='input-group'>
               <div className='input-group__item'>
                  <input 
                     className='text-input'
                     type='text'
                     placeholder='description & note'
                     onChange={this.onDescriptionChange}
                  />
               </div>
               <div className='input-group__item'>
                  <DateRangePicker
                     startDate={this.props.expensesFilters.startDate}
                     endDate={this.props.expensesFilters.endDate}
                     onDatesChange={this.onDatesChange}
                     focusedInput={this.state.focusedInput}
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}
                     minimumNights={0}
                     isOutsideRange={() => false}
                     showClearDates={true}
                  />
               </div>
               <div className='input-group__item__sort'>
                  <select className='select' value={this.props.expensesFilters.paidMethod} onChange={this.onMethodChange}>
                     <option value='all'>all</option>
                     <option value='credit'>credit</option>
                     <option value='debit'>debit</option>
                     <option value='cash'>cash</option>
                  </select>
               </div>
               <div className='input-group__item__sort'>
                  <select className='select' value={this.props.expensesFilters.sortBy} onChange={this.onSortChange}>
                     <option value='name'>name</option>
                     <option value='highest'>high $</option>
                     <option value='lowest'>low $</option>
                     <option value='newest'>newest</option>
                     <option value='oldest'>oldest</option>
                  </select>
               </div>
            </div>
         </div>
      );
   };
};

const mapDispatchToProps = (dispatch) => ({
   setDescNoteFilter: (text) => dispatch(setDescNoteFilter(text)),
   setStartFilter: (startDate) => dispatch(setStartFilter(startDate)),
   setEndFilter: (endDate) => dispatch(setEndFilter(endDate)),
   setMethodFilter: (paidMethod) => dispatch(setMethodFilter(paidMethod)),
   sortByAmountHigh: () => dispatch(sortByAmountHigh()),
   sortByAmountLow: () => dispatch(sortByAmountLow()),
   sortByNewestDate: () => dispatch(sortByNewestDate()),
   sortByOldestDate: () => dispatch(sortByOldestDate()),
   sortByExpenseName: () => dispatch(sortByExpenseName())
});

const mapStateToProps = (state) => ({
   expensesFilters: state.expensesFilters
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesListFilter);