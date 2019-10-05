import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { task: this.props.task, isediting: false }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    render() {
        let result;
        if (this.state.isediting) {
            result = (
                <form>
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
                    <div>{this.props.task}
                        <i className="fas fa-pen" onClick={this.toggleForm}></i>
                        <i className="fas fa-trash" onClick={this.handleRemove}></i>
                    </div>

                </div>
            );
        }
        return result;
    }
}

export default Todo;