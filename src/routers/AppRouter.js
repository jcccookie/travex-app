import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardPage from '../components/DashboardPage';
import ExpenseAddPage from '../components/ExpenseAddPage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import TripAddPage from '../components/TripAddPage';
import TripEditPage from '../components/TripEditPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
   <Router history={history}>
      <div>
         <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/create" component={TripAddPage} />
            <PrivateRoute path="/trip/:id" exact={true} component={TripEditPage} />
            <PrivateRoute path="/add/:id" component={ExpenseAddPage} />
            <PrivateRoute path="/trip/:tripId/expense/:id" component={ExpenseEditPage} />
            <Route component={NotFoundPage}/>
         </Switch>
      </div>
   </Router>
);

export default AppRouter;