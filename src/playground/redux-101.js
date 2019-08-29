import { createStore } from 'redux';

// Action generators - function that return action

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
   type: 'INCREMENT',
   incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
   type: 'DECREMENT',
   decrementBy
});

//setCount
const setCount = ({ setBy = 10 } = {}) => ({
   type: 'SET',
   setBy
});

//resetCount
const resetCount = () => ({
   type: 'RESET',
});

//Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
         };
      case 'DECREMENT':
         return {
            count: state.count - action.decrementBy
         };
      case 'SET':
         return {
            count: action.setBy
         };
      case 'RESET':
         return {
            count: 0
         };
      default:
         return state;
   }
};

const store = createStore(countReducer);

//everytime when store has changed
const unsubscribe = store.subscribe(() => {
   console.log(store.getState());
});

// store.dispatch({
//    type: 'INCREMENT',
//    incrementBy: 5
// });

// unsubscribe(); stop subscribe at this point

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//    type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//    type: 'DECREMENT'
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//    type: 'DECREMENT',
//    decrementBy: 10
// });

store.dispatch(setCount({ setBy: 101 }));

// store.dispatch({
//    type: 'SET',
//    count: 101
// })