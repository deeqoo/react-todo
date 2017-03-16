var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

import LoginPage from 'LoginPage';

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// Load founation
$(document).foundation();

// App csss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp} />
        <IndexRoute component={LoginPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
