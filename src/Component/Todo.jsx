import React from "react";
import "../App.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center bg-[#8758ff] text-indigo-200 px-4 py-2 rounded mb-4 text-lg">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>

      <div className="flex items-center justify-between">
        <FaEdit className="cursor-pointer" onClick={() => editTodo(task.id)} />
        <MdDeleteForever
          className="ml-4 cursor-pointer"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
