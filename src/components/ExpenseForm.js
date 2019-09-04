import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import { DateRangePicker } from 'react-dates';

class ExpenseForm extends React.Component {
   state = {
      description: this.props.expense ? this.props.expense.description : '',
      amount: this.props.expense ? this.props.expense.amount : '',
      startDate: this.props.expense ? moment(this.props.expense.startDate) : null,
      endDate: this.props.expense ? moment(this.props.expense.endDate) : null,
      paidMethod: this.props.expense ? this.props.expense.paidMethod : 'credit',
      note: this.props.expense ? this.props.expense.note : '',
      focusedInput: null,
      error: ''
   };

   onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
   };

   onAmountChange = (e) => {
      const regex = /^\d{0,}(\.\d{0,2})?$/;
      const amount = e.target.value;

      if (regex.test(amount)) {
         this.setState(() => ({ amount }));
      };
   };

   onMethodChange = (e) => {
      const paidMethod = e.target.value;
      this.setState(() => ({ paidMethod }));
   };

   onNoteChange = (e) => {
      const note = e.target.value;
      this.setState(() => ({ note }));
   };

   onDatesChange = ({ startDate, endDate }) => {
      this.setState({ startDate, endDate });
   };

   onFocusChange = (focusedInput) => {
      this.setState({ focusedInput });
   };

   onSubmit = (e) => {
      e.preventDefault();

      if (!this.state.description || !this.state.amount || !this.state.startDate || !this.state.endDate) {
         this.setState(() => ({
            error: 'Please fill up the all forms'
         }));
      } else {
         this.setState(() => ({ error: '' }));

         const id = uuid();
         const expense = {
            description: this.state.description,
            amount: this.state.amount,
            startDate: this.state.startDate.valueOf(),
            endDate: this.state.endDate.valueOf(),
            paidMethod: this.state.paidMethod,
            note: this.state.note
         };
   
         this.props.onSubmit(expense, id);
      }
   };

   render () {
      return (
         <div className='content-container'>
            <h3 className='list-header'>Your Expense</h3>
            {this.state.error && <span className='form__error'>{this.state.error}</span>}
            <form onSubmit={this.onSubmit}>
               <div className='input-group input-group__expense'>
                  <div className='input-group__item'>
                     <input 
                        className='text-input'
                        type='text'
                        placeholder='description'
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
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
               </div>
               <div className='input-group input-group__expense'>
                  <div className='input-group__item'>
                     <input 
                        className='text-input'
                        type='text'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                     />
                  </div>
                  <div className='input-group__item'>
                     <select
                        className='select'
                        value={this.state.paidMethod}
                        onChange={this.onMethodChange}
                     >
                        <option value='credit'>credit</option>
                        <option value='debit'>debit</option>
                        <option value='cash'>cash</option>
                     </select>
                  </div>
                  <div className='input-group__item'>
                     <textarea 
                        className='textarea'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder='add note'
                     />
                  </div>
               </div>
               <button className='button button--save--expense'>Save Expense</button>
            </form>
         </div>
      );
   };
};

export default ExpenseForm;