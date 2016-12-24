import * as redux from 'redux';
import thunk from 'redux-thunk';

import {appReducer,authReducer,dashboardReducer,corporateReducer,userReducer,campReducer,reportReducer,formReducer} from 'reducers'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    app:appReducer,
    auth: authReducer,
    dashboardData:dashboardReducer,
    corporate:corporateReducer,
    user:userReducer,
    camp:campReducer,
    report:reportReducer,
    form:formReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
