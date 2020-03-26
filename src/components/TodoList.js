import React, {Component} from 'react';

class TodoList extends Component {

    render (){
        return (
            <ul>
                {this.props.todos.map((task, i) =>{
                    return <li key={i}>
                            <input type = "checkbox"/>
                            {task}
                            <button onClick = {this.props.handleDelete.bind(null, task)}>Delete</button>
                        </li>

                }
                )}  
            </ul>
        );
    }
}

export default TodoList