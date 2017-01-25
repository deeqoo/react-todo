var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todo', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todo');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
        }

        return $.isArray(todos) ? todos : [];
    }
};
