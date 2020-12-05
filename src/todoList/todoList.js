import React, { Component } from 'react';
import './todoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    handleInput(e) {
        this.setState({ content: e.target.value })
    }

    handleClick() {
        const addData = {
            id: Math.floor(Math.random() * 10000),
            content: this.state.content,
            finished: false,
            edit: false
        }
        this.props.addTodoList(addData);
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className="addList-input">
                <input type="text" onInput={(e) => this.handleInput(e)} value={this.state.content} />
                <div onClick={() => this.handleClick()}>新增代辦</div>
            </div>
        );
    }
}

export default TodoList;
