import React from 'react';

const TodoRow = ({
  todo,
  isEditing,
  editText,
  onEditTextChange,
  onDelete,
  onToggleComplete,
  onEdit,
  onCancelEdit,
  onSaveEdit
}) => {
  return (
    <li className={`todo-row ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={onEditTextChange}
            className="edit-input"
          />
          <button onClick={onSaveEdit} className="save-btn">Save</button>
          <button onClick={onCancelEdit} className="cancel-btn">Cancel</button>
        </>
      ) : (
        <>
          <span onClick={onToggleComplete} className="todo-text">
            {todo.text}
          </span>
          <button onClick={onEdit} className="edit-btn">Edit</button>
          <button onClick={onDelete} className="delete-btn">Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoRow;
