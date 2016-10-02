import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import CorporateHealthProApp from 'CorporateHealthProApp';
import CorporateList from 'admin/corporate/CorporateList';
import Dashboard from 'admin/dashboard/Dashboard';
import Login from 'Login';
//import firebase from 'app/firebase/';

// var requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/');
//   }
//   next();
// };
//
// var redirectIfLoggedIn = (nextState, replace, next) => {
//   if (firebase.auth().currentUser) {
//     replace('/todos');
//   }
//
//   next();
// };

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="/Admin" component={CorporateHealthProApp}>
          <Route path="/Admin/CorporateList" component={CorporateList}/>
          <IndexRoute component={Dashboard}/>
      </Route>
       <IndexRoute component={Login} />
    </Route>
  </Router>
);
