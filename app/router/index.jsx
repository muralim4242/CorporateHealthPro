import React from 'react';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';

import Login from 'Login';

import CorporateHealthProApp from 'CorporateHealthProApp';
import CorporateHealthProAppForDoctor from 'CorporateHealthProAppForDoctor';
import CorporateHealthProAppForUser from 'CorporateHealthProAppForUser';

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
import CorporateListForCampsAdd from 'admin/user/corporate/CorporateListForUsersAdd'
import SelectCompany from 'admin/camp/SelectCompany';

import Reports from 'admin/report/Reports';
import ReportList from 'admin/report/ReportList';
import ReportView from 'admin/report/ReportView';
import SelectCompanyAndCamp from 'admin/report/SelectCompanyAndCamp';
import ReportCheck from 'admin/report/ReportCheck';
import ReportTypeCheck from 'admin/report/ReportTypeCheck';
import Assessment from 'admin/report/Assessment';
import ReportConsolidatedView from 'admin/report/ReportConsolidatedView';
import ReportCreateList from 'admin/report/ReportCreateList';
import ReportAdd from 'admin/report/ReportAdd';

import Profile from "admin/Profile";

import Playground from "Playground";

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
                    <Route path="/Admin/Users/Corporate/:corId/List" component={CorporateUList}/>
                    <Route path="/Admin/Users/Corporate/:corId/Add" component={AdminAdd}/>
                    <Route path="/Admin/Users/Corporate/:corId/Edit/:id" component={AdminAdd}/>
                    <Route path="/Admin/Users/Corporate/:corId/View/:id" component={CorporateUView}/>
                </Route>
                <Route path="/Admin/Camp" component={Camps}>
                    <Route path="/Admin/Camp/SelectCompany" component={CorporateListForCampsAdd}/>
                      // <Route path="/Admin/Camp/SelectCompany" component={SelectCompany}/>
                    <Route path="/Admin/Camp/:corId/List" component={CampList}/>
                    <Route path="/Admin/Camp/:corId/Add" component={CampAdd}/>
                    <Route path="/Admin/Camp/:corId/Edit/:id" component={CampAdd}/>
                    <Route path="/Admin/Camp/:corId/View/:id" component={CampView}/>
                </Route>

                <Route path="/Admin/Report" component={Reports}>
                    <Route path="/Admin/Report/SelectCompanyAndCamp" component={SelectCompanyAndCamp}/>
                    <Route path="/Admin/Report/:corpId/:campId/ReportCheck" component={ReportCheck}/>
                    <Route path="/Admin/Report/:corpId/:campId/View/ReportTypeCheck" component={ReportTypeCheck}/>
                    <Route path="/Admin/Report/:corpId/:campId/View/ReportTypeCheck/:type/Assessment" component={Assessment}/>
                    <Route path="/Admin/Report/:corpId/:campId/View/ReportTypeCheck/:type/Assessment/:assName/List" component={ReportList}/>
                    <Route path="/Admin/Report/:corpId/:campId/View/ReportTypeCheck/:type/Assessment/:assName/View/:id" component={ReportView}/>
                    <Route path="/Admin/Report/:corpId/:campId/View/ReportTypeCheck/:type/Assessment/:assName/ConsView" component={ReportConsolidatedView}/>
                    <Route path="/Admin/Report/:corpId/:campId/Create/Assessment" component={Assessment}/>
                    <Route path="/Admin/Report/:corpId/:campId/Create/Assessment/:assName/List" component={ReportCreateList}/>
                    <Route path="/Admin/Report/:corpId/:campId/Create/Assessment/:assName/Add/:id" component={ReportAdd}/>
                </Route>
                <Route path="/Admin/Profile" component={Profile}/>
                <IndexRoute component={Dashboard}/>
            </Route>
            <Route path="/Doctor" component={CorporateHealthProAppForDoctor}>
                <IndexRoute component={SelectCompanyAndCamp}/>
                <Route path="/Doctor/Report" component={Reports}>
                    <Route path="/Doctor/Report/:corpId/:campId/Create/Assessment" component={Assessment}/>
                    <Route path="/Doctor/Report/:corpId/:campId/Create/Assessment/:assName/List" component={ReportCreateList}/>
                    <Route path="/Doctor/Report/:corpId/:campId/Create/Assessment/:assName/Add" component={ReportAdd}/>
                </Route>
                <Route path="/Doctor/Profile" component={Profile}/>
            </Route>

            <Route path="/User" component={CorporateHealthProAppForUser}>
                <IndexRoute component={CorporateListForUsersAdd}/>
                <Route path="/User/Users" component={Users}>
                    <Route path="/User/Users/Coporate/:corId/List" component={CorporateUList}/>
                    <Route path="/User/Users/Coporate/:corId/Add" component={CorporateUAdd}/>
                    <Route path="/User/Users/Coporate/:corId/Edit/:id" component={CorporateUAdd}/>
                    <Route path="/User/Users/Coporate/:corId/View/:id" component={CorporateUView}/>
                </Route>
                <Route path="/User/Profile" component={Profile}/>
            </Route>
            <Route path="/Playground" component={Playground}/>
            <IndexRoute component={Login}/>
        </Route>
    </Router>
);
