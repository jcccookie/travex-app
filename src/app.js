import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetTrip } from './actions/trips';
import { startSetExpense } from './actions/expenses';

const store = configureStore();

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);

let hasRendered = false;

const renderApp = () => {
   if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true; // not to re-render the app when the user is already using the application
   };
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
   //Login
   if (user) {
      store.dispatch(login(user.uid));
      store.dispatch(startSetTrip());
      store.dispatch(startSetExpense()).then(() => {
         renderApp();
         if (history.location.pathname === '/') {
            history.push('/dashboard');
         };
      });
      
   //Logout
   } else {
      store.dispatch(logout());
      renderApp();
      history.push('/');
   }
});