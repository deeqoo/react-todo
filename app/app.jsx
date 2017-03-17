var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");


var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import LoginPage from 'LoginPage';
import TodoApp from 'TodoApp';

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
