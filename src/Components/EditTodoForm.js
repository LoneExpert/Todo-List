import React, { useState } from 'react';

const EditTodoForm = ({ todo, editTodo }) => {
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = { ...todo, text: updatedText };
    editTodo(updatedTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTodoForm;
