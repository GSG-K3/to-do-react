import React, {Component} from 'react';

class todoList extends Component  {

    constructor () {
        super();
        this.state = {task: '' , todos: []}
    }

    handleSubmit(event){
        event.preventDefault();
        let task = this.state.task;
        let newTodos = this.state.todos.concat(task);
        console.log("Form submitted task", task);
        this.setState({ task: '', todos: newTodos});
    }

    handleChange (event) {
        let task = event.target.value;
        this.setState({ task: task})
    }

    render(){
        return(
            <div className="todo">
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <input onChange = {this.handleChange.bind(this)} value = {this.state.task} placeholder="Enter your new task"/>
                    <button type="submit">Add</button>
                </form>
                <div>
                    {this.state.todos.toString()}
                </div>
            </div>

        );
        }
}

export default todoList;