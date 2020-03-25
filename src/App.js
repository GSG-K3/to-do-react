import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import AddTodo from './components/add-task'

function App() {
  return (
    <div className = "container">
      <TodoHeader/>
      <TodoForm />
      <AddTodo />
    </div>
  );
}

export default App;
