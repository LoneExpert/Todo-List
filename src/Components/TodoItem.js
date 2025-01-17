import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = (updatedTodo) => {
    editTodo(todo.id, updatedTodo);
    setIsEditing(false);
  };

  return (
    <div>
        
      {isEditing ? (
        <EditTodoForm todo={todo} editTodo={handleEdit} />
      ) : (
        <>
          <span className='todo-text'>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}className='edit'>Edit</button>
          <button onClick={handleDelete} className='delete'>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
