import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }
    create(newOne) {
        this.setState({
            todos: [...this.state.todos, newOne]
        })
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => (todo.id !== id))
        })
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                removeTodo={this.remove}
            />
        ))
        return (
            <div className='TodoList'>
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App</p>
                {todos}
                <NewTodoForm createTodo={this.create} />
            </div>
        )
    }
}


export default TodoList;