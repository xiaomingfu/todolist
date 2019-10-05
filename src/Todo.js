import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { task: this.props.task, isediting: false }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    toggleForm() {
        this.setState({ isediting: !this.state.isediting });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleUpdate(evt) {
        evt.preventDefault();
        //update 
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isediting: false })
    }
    handleComplete(evt) {
        this.props.CompleteTodo(this.props.id);
    }
    render() {
        let result;
        if (this.state.isediting) {
            result = (
                <form onSubmit={this.handleUpdate}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
            );
        } else {
            result = (
                <div className="Todo">
                    <div className={this.props.completed ? "completed" : ""}
                        onClick={this.handleComplete}>{this.props.task}
                    </div>
                    <i className="fas fa-pen" onClick={this.toggleForm}></i>
                    <i className="fas fa-trash" onClick={this.handleRemove}></i>
                </div>
            );
        }
        return result;
    }
}

export default Todo;