import React from 'react';
import { View } from 'react-native';
import Todo from './Todo.js';

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
    let filteredTodos
    if (type == 'All') {
        filteredTodos = todos
    }
    else if (type == 'Complete') {
        filteredTodos = todos.filter((t) => t.complete)
    } else if (type == 'Active') {
        filteredTodos = todos.filter((t) => !t.complete)
    }

    const renderedTodos = filteredTodos.map((todo, i) => (
        <Todo
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            key={i}
            todo={todo}
        />
    ));

    return (
        <View>
            {renderedTodos}
        </View>
    );
}

export default TodoList;
