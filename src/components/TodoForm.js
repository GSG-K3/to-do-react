import React, {Component} from 'react';
import TodoList from './TodoList'

class AddTodo extends Component  {

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

    handleDelete (task){
        let newTodo = this.state.todos.filter((item) => {return item !== task})
        this.setState({ todos: newTodo})
    }

    render(){
        return(
            <div className="todo">

                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <input onChange = {this.handleChange.bind(this)} value = {this.state.task} placeholder="Enter your new task"/>
                    <button type="submit">Add</button>
                </form>

                <TodoList 
                handleDelete = {this.handleDelete.bind(this)}
                todos = {this.state.todos}/>

            </div>

        );
        }
}

export default AddTodo;