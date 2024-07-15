import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9), // Generate random id
      text: todoText,
      completed: false,
    };
    addTodo(newTodo);
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
