import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoRow from './TodoRow';
import "./TodoList.css"
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: 'Todo 1', completed: false },
    { id: uuidv4(), text: 'Todo 2', completed: true },
    { id: uuidv4(), text: 'Todo 3', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text, completed: false }]);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTodoText.trim() !== '') {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
          placeholder="Enter new task"
          className="new-todo-input"
        />
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </form>
      <ul className="todo-list-items">
        {todos.map((todo) => (
          <TodoRow
            key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onToggleComplete={() => toggleTodoComplete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;