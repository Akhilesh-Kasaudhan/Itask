import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : "todo";
      })
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          isEditing: todo.id == id ? !todo.isEditing : todo.isEditing,
        };
      })
    );
  };
  const editTask = (value, id) => {
    console.log(value, id);
    setTodos(
      todos.map((todo) => {
        console.log(todo);
        return {
          ...todo,
          task: todo.id == id ? value : todo.task,
          isEditing: todo.id == id ? !todo.isEditing : todo.isEditing,
        };
      })
    );
  };
  // console.log(todos);

  return (
    <div className="bg-[#1A1A40] mt-10 p-8 rounded ">
      <h1 className="text-center mb-2 text-2xl font-bold text-indigo-50">
        Get Things Done!
      </h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} task={todo} key={index} />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
