import React, { Component } from 'react';
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { newTodo: "" };
        this.changeHandle = this.changeHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }
    changeHandle(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandle(e) {
        e.preventDefault();
        const newtodo = { ...this.state, id: uuid() };
        this.props.createTodo(newtodo);
        this.setState({ newTodo: "" });
    }
    render() {
        return (
            <form onSubmit={this.submitHandle}>
                <label htmlFor="todo">New Todo</label>
                <input
                    onChange={this.changeHandle}
                    type="text"
                    name="newTodo"
                    id="todo"
                    value={this.state.newTodo}
                    placehoder="New Todo"
                >
                </input>
                <button>ADD TODO</button>
            </form>
        )
    }
}

export default NewTodoForm;