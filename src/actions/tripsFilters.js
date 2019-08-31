export const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
});

export const setStartDateFilter = (startDate) => ({
   type: 'SET_START_DATE',
   startDate
});

export const setEndDateFilter = (endDate) => ({
   type: 'SET_END_DATE',
   endDate
});

export const sortByName = () => ({
   type: 'SORT_BY_NAME'
});

export const sortByStartFirst = () => ({
   type: 'SORT_BY_START_FIRST'
});

export const sortByStartLate = () => ({
   type: 'SORT_BY_START_LATE'
});

export const sortByNewest = () => ({
   type: 'SORT_BY_NEWEST'
});

export const sortByOldest = () => ({
   type: 'SORT_BY_OLDEST'
});