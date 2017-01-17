var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var TodoApp = require('TodoApp');
// Load founation
$(document).foundation();

// App csss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById("app")
);
