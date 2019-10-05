import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div className="Todo">
                <div>{this.props.task}
                    <i className="fas fa-pen" onClick={this.props.edit}></i>
                    <i className="fas fa-trash" onClick={this.handleRemove}></i>
                </div>

            </div>
        )
    }
}

export default Todo;