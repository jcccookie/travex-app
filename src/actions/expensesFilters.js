export const setDescNoteFilter = (text = '') => ({
   type: 'SET_DESC_NOTE_FILTER',
   text
});

export const setStartFilter = (startDate) => ({
   type: 'SET_START_FILTER',
   startDate
});

export const setEndFilter = (endDate) => ({
   type: 'SET_END_FILTER',
   endDate
});

export const setMethodFilter = (paidMethod) => ({
   type: 'SET_METHOD_FILTER',
   paidMethod
});

export const sortByAmountHigh = () => ({
   type: 'SORT_AMOUNT_HIGH'
});

export const sortByAmountLow = () => ({
   type: 'SORT_AMOUNT_LOW'
});

export const sortByNewestDate = () => ({
   type: 'SORT_NEWEST_DATE'
});

export const sortByOldestDate = () => ({
   type: 'SORT_OLDEST_DATE'
});

export const sortByExpenseName = () => ({
   type: 'SORT_EXPENSE_NAME'
});