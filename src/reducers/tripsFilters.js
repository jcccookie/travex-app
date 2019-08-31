const filterDefaultState = {
   text: '',
   startDate: null,
   endDate: null,
   sortBy: 'oldest'
};

export default (state = filterDefaultState, action) => {
   switch(action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         };
      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.startDate
         };
      case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.endDate
         };
      case 'SORT_BY_NAME':
         return {
            ...state,
            sortBy: 'name'
         };
      case 'SORT_BY_START_FIRST':
         return {
            ...state,
            sortBy: 'startFirst'
         };
      case 'SORT_BY_START_LATE':
         return {
            ...state,
            sortBy: 'startLate'
         };
      case 'SORT_BY_NEWEST':
         return {
            ...state,
            sortBy: 'newest'
         };
      case 'SORT_BY_OLDEST':
         return {
            ...state,
            sortBy: 'oldest'
         };
      default:
         return state;
   };
};