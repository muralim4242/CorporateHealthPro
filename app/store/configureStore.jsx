import * as redux from 'redux';
import thunk from 'redux-thunk';

import {authReducer,dashboardReducer,corporateReducer} from 'reducers'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    dashboardData:dashboardReducer,
    corporate:corporateReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
