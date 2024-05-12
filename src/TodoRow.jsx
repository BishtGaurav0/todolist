import React, { useState } from 'react';
import Checkbox from './Component/Checkbox/Checkbox';
import Button from './Component/Button/Button';

const TodoRow = ({ todo, onDelete, onToggleComplete }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Checkbox
        label={todo.text}
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      {hover && (
        <Button variant="small" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default TodoRow;
