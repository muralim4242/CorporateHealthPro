import React from 'react';
import {Route, Router, IndexRoute, hashHistory,browserHistory} from 'react-router';

import Login from 'Login';

import CorporateHealthProApp from 'CorporateHealthProApp';

import Dashboard from 'admin/dashboard/Dashboard';

import Corporate from 'admin/corporate/Corporate';
import CorporateList from 'admin/corporate/CorporateList';
import CorporateAdd from 'admin/corporate/CorporateAdd';
import CorporateView from 'admin/corporate/CorporateView';

import Users from 'admin/user/Users';
import UserCheck from 'admin/user/UserCheck'
import AdminList from 'admin/user/admin/AdminList';
import AdminAdd from 'admin/user/admin/AdminAdd';
import AdminView from 'admin/user/admin/AdminView';
import CorporateListForUsersAdd from 'admin/user/corporate/CorporateListForUsersAdd'
import CorporateUList from 'admin/user/corporate/CorporateList';
import CorporateUAdd from 'admin/user/corporate/CorporateAdd';
import CorporateUView from 'admin/user/corporate/CorporateView';

import Camps from 'admin/camp/Camps';
import CampList from 'admin/camp/CampList';
import CampAdd from 'admin/camp/CampAdd';
import CampView from 'admin/camp/CampView';
import SelectCompany from 'admin/camp/SelectCompany';



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

export default(
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="/Admin" component={CorporateHealthProApp}>
                <Route path="/Admin/Corporate" component={Corporate}>
                    <Route path="/Admin/Corporate/List" component={CorporateList}/>
                    <Route path="/Admin/Corporate/Add" component={CorporateAdd}/>
                    <Route path="/Admin/Corporate/Edit/:id" component={CorporateAdd}/>
                    <Route path="/Admin/Corporate/View/:id" component={CorporateView}/>
                </Route>
                <Route path="/Admin/Users" component={Users}>
                    <Route path="/Admin/Users/UserCheck" component={UserCheck}/>
                    <Route path="/Admin/Users/Admin/List" component={AdminList}/>
                    <Route path="/Admin/Users/Admin/Add" component={AdminAdd}/>
                    <Route path="/Admin/Users/Admin/Edit/:id" component={AdminAdd}/>
                    <Route path="/Admin/Users/Admin/View/:id" component={AdminView}/>
                    <Route path="/Admin/Users/Corporate/CorporateListForUsersAdd" component={CorporateListForUsersAdd}/>
                    <Route path="/Admin/Users/Coporate/:corId/List" component={CorporateUList}/>
                    <Route path="/Admin/Users/Coporate/:corId/Add" component={CorporateUAdd}/>
                    <Route path="/Admin/Users/Coporate/:corId/Edit/:id" component={CorporateUAdd}/>
                    <Route path="/Admin/Users/Coporate/:corId/View/:id" component={CorporateUView}/>
                </Route>
                <Route path="/Admin/Camp" component={Camps}>
                    <Route path="/Admin/Camp/SelectCompany" component={SelectCompany}/>
                    <Route path="/Admin/Camp/List" component={CampList}/>
                    <Route path="/Admin/Camp/Add" component={CampAdd}/>
                    <Route path="/Admin/Camp/Edit/:id" component={CampAdd}/>
                    <Route path="/Admin/Camp/View/:id" component={CampView}/>
                </Route>
                <IndexRoute component={Dashboard}/>
            </Route>
            <IndexRoute component={Login}/>
        </Route>
    </Router>
);
