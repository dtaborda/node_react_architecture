import React from 'react';
import {
  Router,
  Route,
  Redirect,
  browserHistory
} from 'react-router';
import ApplicationContainer from 'views/application/application_container';
import EmployeesContainer from 'views/home/employees_container';

if (module.hot) {
  // Don't hot reload the routes, do a refresh instead
  module.hot.decline();
}

export default function renderRoutes(store) {
  return (
    <Router history={browserHistory}>
      <Redirect from="/" to="/employees" />
      <Route path='/' component={ApplicationContainer}>
        <Route path='/employees' component={EmployeesContainer} />
      </Route>
    </Router>
  );
}
