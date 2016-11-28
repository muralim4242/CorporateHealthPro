var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var actions = require('actions');
var store = require('configureStore').configure();
//import firebase from 'app/firebase/';
import router from 'app/router/';

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(actions.login(user.uid));
//     store.dispatch(actions.startAddTodos());
//     hashHistory.push('/todos');
//   } else {
//     store.dispatch(actions.logout());
//     hashHistory.push('/');
//   }
// });

// Load foundation
//$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider>
        {router}
    </MuiThemeProvider>
</Provider>, document.getElementById('app'));
