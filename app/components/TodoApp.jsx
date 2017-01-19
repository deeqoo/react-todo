var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},{
					id: 2,
					text: 'Clean the yard'
				},{
					id: 3,
					text: 'Go to the gym'
				}, {
					id: 4,
					text: 'Code couple hours.'
				}
			]
		};
	},

	handleAddTodo: function(text){
		alert('new todod: ' + text);
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>

				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo}/>

			</div>
		)
	}
});

module.exports = TodoApp;
