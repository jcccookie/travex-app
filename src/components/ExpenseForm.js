import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
   state = {
      description: this.props.expense ? this.props.expense.description : '',
      amount: this.props.expense ? this.props.expense.amount : '',
      date: this.props.expense ? moment(this.props.expense.date) : null,
      paidMethod: this.props.expense ? this.props.expense.paidMethod : 'credit',
      note: this.props.expense ? this.props.expense.note : '',
      focused: null,
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

   onDateChange = (date) => {
      this.setState({ date });
   };

   onFocusChange = ({ focused }) => {
      this.setState({ focused });
   };

   onSubmit = (e) => {
      e.preventDefault();

      if (!this.state.description || !this.state.amount || !this.state.date) {
         this.setState(() => ({
            error: 'Please fill up the all forms'
         }));
      } else {
         this.setState(() => ({ error: '' }));

         const id = uuid();
         const expense = {
            description: this.state.description,
            amount: this.state.amount,
            date: this.state.date.valueOf(),
            paidMethod: this.state.paidMethod,
            note: this.state.note
         };
   
         this.props.onSubmit(expense, id);
      }
   };

   render () {
      return (
         <div>
            {this.state.error && <span>{this.state.error}</span>}
            <form onSubmit={this.onSubmit}>
               <input 
                  type='text'
                  placeholder='description'
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
               />
               <SingleDatePicker
                  date={this.state.date}
                  onDateChange={this.onDateChange}
                  focused={this.state.focused}
                  onFocusChange={this.onFocusChange}
                  showClearDate={true}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
               />
               <input 
                  type='text'
                  placeholder='amount'
                  value={this.state.amount}
                  onChange={this.onAmountChange}
               />
               <select
                  value={this.state.paidMethod}
                  onChange={this.onMethodChange}
               >
                  <option value='credit'>credit</option>
                  <option value='debit'>debit</option>
                  <option value='cash'>cash</option>
               </select>
               
               <textarea 
                  value={this.state.note}
                  onChange={this.onNoteChange}
                  placeholder='add note'
               />
               <button>Save Expense</button>
            </form>
         </div>
      );
   };
};

export default ExpenseForm;