import React, { Component } from 'react'
import Input from "./Input";
import List from "./List";
import moment from 'moment';

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            defaultValue: "",
            todoItems: [],
            message: "",
            class: "",
            deletedItems: []
        }
    }

    todoOnChangeHandler = (e) => {

        if (e.target.value.split("").length < 2) {
            this.setState({
                defaultValue: e.target.value,
                message: "Insufficient Characters",
                class: "error"
            })
        }
        else if (e.target.value.split("").length > 200) {
            this.setState({
                defaultValue: e.target.value,
                message: "Exceeded Maximum Character Length",
                class: "error"
            })
        }
        else {
            this.setState({
                defaultValue: e.target.value,
                message: "",
                class: ""
            })
        }
    }

    todoInputHandler = (e) => {

        let timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');

        if (this.state.defaultValue.split("").length < 2 || this.state.defaultValue.split("").length > 200) {
            this.setState((prevState) => ({
                todoItems: prevState.todoItems,
                defaultValue: ""
            }))
        }
        else {
            this.setState((prevState) => ({
                todoItems: [...prevState.todoItems, { "date": timestamp, "item": this.state.defaultValue }],
                defaultValue: ""
            }))
        }
    }

    todoDeleteHandler = (e) => {

        let allTodoItems = this.state.todoItems;
        let deleted = allTodoItems.splice(e.target.value, 1);

        this.setState((prevState) => ({
            todoItems: [...prevState.todoItems],
            deletedItems: [...prevState.deletedItems, deleted[0]]
        }))

    }

    render() {
        return (
            <div>
                <Input
                    onChange={this.todoOnChangeHandler}
                    add={this.todoInputHandler}
                    value={this.state.defaultValue}
                    message={this.state.message}
                    class={this.state.class}
                />
                <List
                    items={this.state.todoItems}
                    delete={this.todoDeleteHandler}
                    deleted={this.state.deletedItems}
                />
            </div>
        )
    }
}
