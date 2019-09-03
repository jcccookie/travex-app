import moment from 'moment';

export default (trips, { text, startDate, endDate, sortBy }) => {
   return trips.filter(trip => {
      const isTextIncluded = trip.destination.toLowerCase().includes(text.toLowerCase());
      const isStartDateValid = startDate ? moment(trip.startDate).isSameOrAfter(startDate, 'day') : true;
      const isEndDateValid = endDate ? moment(trip.endDate).isSameOrBefore(endDate, 'day') : true;

      return isTextIncluded && isStartDateValid && isEndDateValid;
   }).sort((a, b) => {
      if (sortBy === 'name') {
         const nameA = a.destination.toLowerCase();
         const nameB = b.destination.toLowerCase();
         if (nameA < nameB) {
            return -1;
         } else if (nameA > nameB) {
            return 1;
         } 
         return 0;
      } else if (sortBy === 'startFirst') {
         return a.startDate - b.startDate;
      } else if (sortBy === 'startLate') {
         return b.startDate - a.startDate;
      } else if (sortBy === 'oldest') {
         return a.createdAt - b.createdAt;
      } else if (sortBy === 'newest') {
         return b.createdAt - a.createdAt;
      };
   });
};