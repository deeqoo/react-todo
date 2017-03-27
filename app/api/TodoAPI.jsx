var $ = require('jquery');

module.exports = {
    filteredTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;
        //Filter showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted
        });

        filteredTodos = filteredTodos.filter((todo) => {
          var text = todo.text.toLowerCase();
          return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
        });

        // Sort todos with no-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
  }
