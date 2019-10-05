import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className="Todo">
                <div>{this.props.todo}
                    <i className="fas fa-pen" onClick={this.props.remove}></i>

                </div>

            </div>
        )
    }
}

export default Todo;