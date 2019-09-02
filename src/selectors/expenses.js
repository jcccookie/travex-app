import moment from 'moment';

export default (expenses, { description, startDate, endDate, paidMethod, note, sortBy}, trip) => {
   return expenses.filter(expense => {
      const isInTrip = trip.expenses.includes(expense.id);

      const isInDescNote = expense.description.toLowerCase().includes(description.toLowerCase()) || expense.note.toLowerCase().includes(note.toLowerCase());
      const isStartDate = startDate ? moment(expense.startDate).isSameOrAfter(moment(startDate), 'day') : true;
      const isEndDate = endDate ? moment(expense.endDate).isSameOrBefore(moment(endDate), 'day') : true;

      return isInTrip && isInDescNote && isStartDate && isEndDate;
   }).filter(expense => {
      if (paidMethod === 'all') {
         return true;
      } else {
         return expense.paidMethod === paidMethod;
      }
   }).sort((a, b) => {
      if (sortBy === 'highest') {
         return b.amount - a.amount;
      } else if (sortBy === 'lowest') {
         return a.amount - b.amount;
      } else if (sortBy === 'newest') {
         return  b.startDate - a.startDate;
      } else if (sortBy === 'oldest') {
         return a.startDate - b.startDate;
      } else if (sortBy === 'name') {
         const aDesc = a.description.toLowerCase();
         const bDesc = b.description.toLowerCase();
         if (aDesc < bDesc) {
            return -1;
         } else if (aDesc > bDesc) {
            return 1;
         }
         return 0;
      };
   });
};