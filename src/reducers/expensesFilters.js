const defaultFilterState = {
   description: '',
   startDate: null,
   endDate: null,
   paidMethod: 'all',
   note: '',
   sortBy: 'oldest',
};

export default (state = defaultFilterState, action) => {
   switch (action.type) {
      case 'SET_DESC_NOTE_FILTER':
         return {
            ...state,
            description: action.text,
            note: action.text
         };
      case 'SET_START_FILTER':
         return {
            ...state,
            startDate: action.startDate
         };
      case 'SET_END_FILTER':
         return {
            ...state,
            endDate: action.endDate
         };
      case 'SET_METHOD_FILTER':
         return {
            ...state,
            paidMethod: action.paidMethod
         };
      case 'SORT_AMOUNT_HIGH':
         return {
            ...state,
            sortBy: 'highest'
         };
      case 'SORT_AMOUNT_LOW':
         return {
            ...state,
            sortBy: 'lowest'
         };
      case 'SORT_NEWEST_DATE':
         return {
            ...state,
            sortBy: 'newest'
         };
      case 'SORT_OLDEST_DATE':
         return {
            ...state,
            sortBy: 'oldest'
         };
      case 'SORT_EXPENSE_NAME':
         return {
            ...state,
            sortBy: 'name'
         };
      default:
         return state;
   };
};