import React, { useState, useEffect } from 'react';
import TodoList from './Components/TodoList';
import AddTodoForm from './Components/AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className='title'>A SIMPLE TODO APP</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
